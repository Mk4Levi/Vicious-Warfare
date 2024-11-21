export const metadata = {
  title: "Gallery",
  description: "View our gallery",
};

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-200 rounded"></div>
        <div className="aspect-square bg-gray-200 rounded"></div>
        <div className="aspect-square bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
