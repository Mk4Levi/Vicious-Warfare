import HomePage from "./components/HomePage";

export const metadata = {
  title: "Home",
  description: "Welcome to our website - discover what we have to offer",
};

export default function Home() {
  return (
    <div className="container w-full mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-lg mb-4">
        Discover our amazing content and services. We're here to provide you with the best
        experience possible.
      </p>
      <HomePage />
    </div>
  );
}
