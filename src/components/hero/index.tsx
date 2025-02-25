import { Bowlby_One, Roboto } from "next/font/google";
import Image from "next/image";

const bowlbyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div className={`text-xl font-bold tracking-wider ${roboto.className}`}>
        Hey, Welcome <span className="text-4xl font-bold">👋</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center hover:scale-105 transition-all duration-200">
        <div
          className={`px-2 rounded-lg font-extrabold text-transparent texl-7xl sm:text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 tracking-normal ${bowlbyOne.className}
		hover:cursor-crosshair hover:text-black hover:bg-clip-padding transition-all duration-200`}
        >
          Monish
        </div>
        <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] relative">
          <Image src={`/memoji.png`} alt="monish" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
