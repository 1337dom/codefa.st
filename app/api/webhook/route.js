import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    // Verify the webhook event is from stripe
    const stripe = new Stripe(process.env.STRIPE_API_KEY);

    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    const { data, type } = event;

    if (type === "checkout.session.completed") {
      // Grant access to the product if correct
      await connectMongo();

      const user = await User.findById(data.object.client_reference_id);

      if (!user) {
        console.error(
          "User not found with ID:",
          data.object.client_reference_id
        );
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      user.hasAccess = true;
      user.customerId = data.object.customer;

      await user.save();
    } else if (type === "customer.subscription.deleted") {
      // Revoke access to the product (subscription calcelled or non-payment)
      await connectMongo();

      const user = await User.findOne({
        customerId: data.object.customer,
      });

      user.hasAccess = false;

      await user.save();
    }
  } catch (error) {
    console.error("Stripe error: " + error?.message);
  }

  return NextResponse.json({});
}
