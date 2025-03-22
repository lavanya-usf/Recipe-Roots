import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[35vh] mt-4 rounded-xl overflow-hidden shadow-lg mb-6">
      <Image
        src="/banner.webp"
        alt="Food Discovery Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Know Your Dish.</h1>
        <p className="text-lg md:text-xl mb-4">Pictures, ingredients & flavor – all in one place.</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
