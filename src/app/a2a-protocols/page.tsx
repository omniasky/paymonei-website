import { redirect } from "next/navigation";

// A2A Protocols page has been removed from navigation.
// Redirect to homepage.
export default function A2AProtocolsPage() {
  redirect("/");
}
