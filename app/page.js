import HomePage from "./components/HomePage";

export const metadata = {
  title: "Home | Vicious Warfare",
  description: "Welcome to our website - discover what we have to offer",
};

export default function Home() {
  return (
    <div className="container w-full mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Vicious Warfare</h1>
      <p className="text-lg mb-4">
        Vicious Warfare revive and create the dark, raw sound of old-school black and death metal
        music from the 1980s and 1990s.
      </p>
      <HomePage />
    </div>
  );
}
