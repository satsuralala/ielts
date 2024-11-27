import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/landing");
  return <div>Loading...</div>;
}
