// Payment integration stub - Replace with Paymob/Fawry integration

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
}

export interface PaymentOptions {
  amount: number;
  currency?: string;
  description?: string;
  customerEmail?: string;
}

// Stub function - to be implemented with Paymob/Fawry
export async function createPaymentIntent(options: PaymentOptions): Promise<PaymentIntent> {
  console.log("Payment integration not yet configured", options);
  return {
    id: "stub_" + Date.now(),
    amount: options.amount,
    currency: options.currency || "EGP",
    status: "pending",
  };
}

// Stub function for verifying payment
export async function verifyPayment(paymentId: string): Promise<boolean> {
  console.log("Verifying payment:", paymentId);
  return false;
}

// Membership tiers
export const membershipTiers = [
  {
    id: "monthly",
    name: "Monthly Membership",
    price: 49,
    currency: "EGP",
    features: [
      "Full poetry archive access",
      "Premium essays",
      "Early access to new content",
    ],
  },
  {
    id: "premium",
    name: "Premium Membership",
    price: 99,
    currency: "EGP",
    features: [
      "Everything in Monthly",
      "1 monthly 20-min mentoring session",
      "Exclusive Q&A access",
    ],
  },
] as const;

// Content packs
export const contentPacks = [
  {
    id: "poetry-pack",
    name: "Poetry Pack",
    description: "10 exclusive poems",
    price: 75,
    currency: "EGP",
  },
  {
    id: "essay-pack",
    name: "Essay Pack",
    description: "5 long-form essays",
    price: 60,
    currency: "EGP",
  },
] as const;
