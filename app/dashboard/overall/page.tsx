import { Performance } from "./(default)/performance";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>Recent Result</div>

      {/* Performance */}
      <Performance />
    </div>
  );
}
