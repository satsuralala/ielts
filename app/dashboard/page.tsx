import { Performance } from "./(default)/performance";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>Result / Average </div>

      {/* Performance */}
      <Performance />
    </div>
  );
}
