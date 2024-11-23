import Image from "next/image";
import Link from "next/link";

import { Bowlby_One, Roboto } from "next/font/google";

const bowlbyOne = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const HomePage = () => {
  return (
    <section className="flex flex-col h-screen justify-center items-center">
      <div className={`text-xl font-bold tracking-wider ${roboto.className}`}>
        Hey, Welcome <span className="text-4xl font-bold">👋</span>
      </div>
      <div className="flex flex-row items-center hover:scale-105 transition-all duration-200">
        <div
          className={`px-2 rounded-lg font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 tracking-normal ${bowlbyOne.className}
		hover:cursor-crosshair hover:text-black hover:bg-clip-padding transition-all duration-200`}
        >
          Monish
        </div>
        <Image src={`/memoji.png`} alt="monish" width={200} height={200} />
      </div>

      <Link href="https://github.com/mon7792" target="_blank">
        <div className="flex items-center justify-center p-2 border-2 border-white rounded-full cursor-pointer">
          <Image src={`/github-logo.png`} alt="arrow" width={40} height={40} />
        </div>
      </Link>
    </section>
  );
};

export default HomePage;
