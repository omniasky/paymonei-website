import { redirect } from "next/navigation";

// Invoice Factoring has been removed — this is a regulated lending product.
// Redirect to homepage permanently.
export default function InvoiceFactoringPage() {
  redirect("/");
}
