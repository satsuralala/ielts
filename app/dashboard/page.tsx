import { Metadata } from "next";
import { Performance } from "./(default)/performance";

export const metadata: Metadata = {
  title: "Dashboard - Marshall Language School",
};

export default function Page() {
  return (
    <div className="space-y-4">
      <div>Result / Average </div>

      {/* Performance */}
      <Performance />
    </div>
  );
}
