"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Vicious Warfare</h1>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Vicious Warfare was formed in 2014 in Bangalore, India. Nekrozin is the founding
              member, vocalist, and guitarist. In 2016, Zed joined the band as the bassist.
            </p>
            <p>
              The band draws influences from the occult, death, and magic, and is greatly inspired
              by legendary bands such as The Mighty Impiety, Demoncy, Sadistic Intent, Immortal, and
              Mortem.
            </p>
            <p>
              Vicious Warfare aims to revive and create the dark, raw sound of old-school black and
              death metal music from the 1980s and 1990s.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="/events"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Upcoming Shows
              </a>
              <a
                href="/gallery"
                className="border border-black text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Band Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/logo.jpg"
              alt="Vicious Warfare band members"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
