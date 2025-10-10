"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/molecules/CodeBlock";

// Code examples
const paymentsLegacyCode = `// 1. Create checkout session with line items
const session = await CardSDK.checkout.sessions.create({
  customer: "cust_abc123",
  mode: "payment",
  line_items: [
    {
      price: "price_1MotwRLkdIwHu7ixYcPLm5uZ",
      quantity: 2,
    },
    {
      price: "price_1MotwRLkdIwHu7ixYcPLm6uA",
      quantity: 1,
    }
  ],
  success_url: "https://myapp.com/success",
  cancel_url: "https://myapp.com/cancel",
});

// 2. For stablecoins - different flow entirely
const usdcPayment = await CoinSDK.payments.create({
  customer: "cust_abc123",
  amount: calculateTotal(line_items), // Manual calculation
  currency: "USDC",
  chain: "ethereum",
  wallet_address: "0x742d35Cc...",
  metadata: {
    items: JSON.stringify(line_items), // Manually serialize
  }
});

// 3. Update subscription (downgrade scenario)
const subscription = await CardSDK.subscriptions.retrieve(
  "sub_abc123"
);

// Cancel at period end
await CardSDK.subscriptions.update("sub_abc123", {
  cancel_at_period_end: true,
});

// Create new lower-tier subscription
const newSub = await CardSDK.subscriptions.create({
  customer: "cust_abc123",
  items: [{ price: "price_basic" }],
  proration_behavior: "create_prorations",
  billing_cycle_anchor: subscription.current_period_end,
});

// Handle proration invoice
const invoice = await CardSDK.invoices.retrieve(
  newSub.latest_invoice
);
if (invoice.amount_due < 0) {
  // Credit customer for overpayment
  await CardSDK.customers.createBalanceTransaction(
    "cust_abc123",
    { amount: Math.abs(invoice.amount_due) }
  );
}

// 4. Different webhook handling for each provider
// 5. Manual reconciliation between card/crypto payments`;

const paymentsPaymoneiCode = `import { usePaymonei } from '@paymonei/react';

function CheckoutButton() {
  const { checkout } = usePaymonei();

  return (
    <Button
      onClick={async () => {
        await checkout({
          customer_id: "cust_abc123",
          price_id: "price_1MotwRLkdIwHu7ixYcPLm5uZ"
        });
      }}
    >
      Checkout
    </Button>
  );
}

// That's it! ✨
// - Customer chooses preferred methods
// - Payment modal opens automatically
// - Line items, subscriptions, all handled
// - One simple hook`;

const trackingLegacyCode = `// 1. Track usage for free tier features
const user = await db.getUser(userId);
const apiCallBalance = user.features.api_calls || 0;
await db.updateUser(userId, {
  features: {
    ...user.features,
    api_calls: apiCallBalance - 1,
  },
  last_activity: Date.now(),
});

// 2. Track metered billing for paid features
await CardSDK.billing.meterEvents.create({
  event_name: "api_requests",
  payload: {
    stripe_customer_id: user.stripe_id,
    value: "1",
  },
  timestamp: Math.floor(Date.now() / 1000),
});

// 3. Update seat-based subscriptions
const subscription = await CardSDK.subscriptions.retrieve(
  user.subscription_id
);
const seatItem = subscription.items.data.find(
  (item) => item.price.id === user.seat_price_id
);
const newSeats = seatItem.quantity + additionalSeats;

await CardSDK.subscriptions.update(user.subscription_id, {
  items: [{
    id: seatItem.id,
    quantity: newSeats,
  }],
  proration_behavior: "always_invoice",
});

// 4. Separately track crypto payment volumes
const cryptoUsage = await db.getCryptoUsage(userId);
await db.updateCryptoUsage(userId, {
  total_volume: cryptoUsage.total_volume + amount,
  transaction_count: cryptoUsage.transaction_count + 1,
});

// 5. Check limits across different systems
if (apiCallBalance <= 0) {
  throw new Error("API limit exceeded");
}
if (user.monthly_volume > user.plan_limit) {
  throw new Error("Volume limit exceeded");
}

// 6. Manual reconciliation between Card/Crypto usage
// 7. Custom cron jobs for billing cycles
// 8. Handle usage spikes and overage charges`;

const trackingPaymoneiCode = `import { usePaymonei } from '@paymonei/react';

function FeatureUsage() {
  const { track, getUsage } = usePaymonei();

  const handleApiCall = async () => {
    // Track usage - that's it!
    await track({
      customer_id: "cust_abc123",
      price_id: "price_1MotwRLkdIwHu7ixYcPLm5uZ"
    });
  };

  const checkLimits = async () => {
    const usage = await getUsage({
      customer_id: "cust_abc123",
      price_id: "price_1MotwRLkdIwHu7ixYcPLm5uZ"
    });
    console.log(usage);
    // {
    //   used: 8500,
    //   limit: 10000,
    //   remaining: 1500,
    //   resets_at: "2024-12-01"
    // }
  };

  return <Button onClick={handleApiCall}>Make API Call</Button>;
}

// That's it! ✨
// - Free tier, metered billing, seats - all tracked
// - Automatic limit checks
// - No manual database updates`;

const webhooksLegacyCode = `// 1. Listen to webhooks to update customer state
app.post("/webhooks/card", async (req, res) => {
  let event = req.body;
  let data = event.data.object;

  switch(event.type) {
    case "checkout.session.completed":
      await db.updateUser(data.customer, {
        product_id: data.line_items.data[0].price.product,
        plan_status: "active",
        features: extractFeatures(data.line_items),
        subscribed_at: Date.now(),
      });
      break;
    case "invoice.payment_failed":
      await db.updateUser(data.customer, {
        plan_status: "past_due",
      });
      // Block access to paid features
      break;
    case "customer.subscription.deleted":
      await db.updateUser(data.customer, {
        product_id: null,
        plan_status: "cancelled",
        features: null,
      });
      break;
  }
});

// 2. Separate stablecoin webhook handler
app.post("/webhooks/stablecoin", async (req, res) => {
  const event = req.body;
  // Completely different event structure
  if (event.status === "confirmed") {
    await db.updateStablecoinPayment(event.payment_id, {
      confirmed: true,
      tx_hash: event.transaction_hash,
    });
  }
});

// 3. Check feature access in every API call
async function canAccessFeature(userId, featureId, amount) {
  const user = await db.getUser(userId);
  const planStatus = user.plan_status;
  const featureBalance = user.features?.[featureId];

  return planStatus === "active" && featureBalance >= amount;
}

// 4. Check product access
async function canAccessProduct(userId, productId) {
  const user = await db.getUser(userId);
  return user.plan_status === "active" &&
         user.product_id === productId;
}

// 5. Webhook signature verification
// 6. Handle webhook replay attacks
// 7. Sync state across multiple databases
// 8. Manual reconciliation for failed webhooks`;

const webhooksPaymoneiCode = `import { usePaymonei } from '@paymonei/react';

function ApiCallButton() {
  const { check } = usePaymonei();

  const handleApiCall = async () => {
    // Check if customer can access this feature
    const { allowed } = await check({
      customer_id: "cust_abc123",
      price_id: "price_1MotwRLkdIwHu7ixYcPLm5uZ"
    });

    if (!allowed) {
      alert("Usage limit reached");
      return;
    }

    // Make API call
    await makeApiCall();
  };

  return <Button onClick={handleApiCall}>Make API Call</Button>;
}

// That's it! ✨
// - Check limits before feature access
// - No webhooks required
// - No manual database queries
// - Real-time limit validation`;

export function CodeComparisonSection() {
  return (
    <section className="py-20 md:py-28 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Complex to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600">
              Simple
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform complex billing for AI credits, in-app features, and subscriptions into simple API calls.
          </p>
        </div>

        {/* Code Comparisons */}
        <Tabs defaultValue="payments" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/30 p-2 rounded-xl mb-12">
            <TabsTrigger
              value="payments"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-sm md:text-base font-medium rounded-lg transition-all"
            >
              Handle Payments
            </TabsTrigger>
            <TabsTrigger
              value="tracking"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-sm md:text-base font-medium rounded-lg transition-all"
            >
              Track Usage & Billing
            </TabsTrigger>
            <TabsTrigger
              value="webhooks"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 px-4 text-sm md:text-base font-medium rounded-lg transition-all"
            >
              Webhooks Optional
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Handle Payments */}
          <TabsContent value="payments" className="mt-0">
            <div className="relative">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Handle checkouts, line items, and subscription changes with one simple hook
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeBlock
                  code={paymentsLegacyCode}
                  filename="legacy-integration.tsx"
                  language="typescript"
                  variant="legacy"
                />
                <CodeBlock
                  code={paymentsPaymoneiCode}
                  filename="paymonei.tsx"
                  language="typescript"
                  variant="paymonei"
                />
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Track Usage & Billing Limits */}
          <TabsContent value="tracking" className="mt-0">
            <div className="relative">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Monitor transaction volumes and manage billing cycles
                  automatically
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeBlock
                  code={trackingLegacyCode}
                  filename="legacy-tracking.tsx"
                  language="typescript"
                  variant="legacy"
                />
                <CodeBlock
                  code={trackingPaymoneiCode}
                  filename="paymonei.tsx"
                  language="typescript"
                  variant="paymonei"
                />
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Webhooks Optional */}
          <TabsContent value="webhooks" className="mt-0">
            <div className="relative">
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Check AI credit limits in real-time before processing requests
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeBlock
                  code={webhooksLegacyCode}
                  filename="legacy-webhook-handlers.tsx"
                  language="typescript"
                  variant="legacy"
                />
                <CodeBlock
                  code={webhooksPaymoneiCode}
                  filename="paymonei-check.tsx"
                  language="typescript"
                  variant="paymonei"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
