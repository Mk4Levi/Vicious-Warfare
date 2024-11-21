

export default function HomePage() {
    return (
        <div
            className="border border-white w-full flex flex-row justify-center items-center flex-wrap gap-4"
        >
            <p className="w-11/12 md:w-1/2">
                Vicious Warfare was formed in 2014 in Bangalore, India. Nekrozin is the founding member, vocalist, and guitarist. In 2016, Zed joined the band as the bassist. The band draws influences from the occult, death, and magic and is greatly inspired by bands such as The Mighty Impiety, Demoncy, Sadistic Intent, Immortal, and Mortem. Vicious Warfare aims to revive and create the dark, raw sound of old-school black and death metal music from the 1980s and 1990s.
            </p>
            <div className="w-11/12 md:w-1/2">
                <img src="./logo.jpg" alt="Vicious Warfare band members" className="w-auto h-auto aspect-square max-w-full" />
            </div>
        </div>
    )
}