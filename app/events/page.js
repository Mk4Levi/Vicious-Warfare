export const metadata = {
  title: "Events",
  description: "Check out our upcoming events",
};

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <div className="grid gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Sample Event</h2>
          <p>Date: Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
