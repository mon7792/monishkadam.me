import Social from "@/components/social";
import { BentoGridSecondDemo } from "@/components/highlight";
import { NavbarTop } from "@/components/navbar/top";
import Hero from "@/components/hero";
import { Footer } from "@/components/footer";

const HomePage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-2">
      <NavbarTop />
      <section className="flex flex-col items-center">
        <Hero />
        <div className="flex flex-row items-center gap-2">
          <Social
            href="https://github.com/mon7792"
            src="/github-logo.png"
            alt="arrow"
            width={40}
            height={40}
          />
          <Social
            href="https://www.linkedin.com/in/monishkadam/"
            src="/linkedin-logo.png"
            alt="arrow"
            className="invert"
            width={40}
            height={40}
          />
          <Social
            href="https://buymeacoffee.com/monishkadam"
            src="/buy-me-a-coffee-logo.png"
            alt="arrow"
            className="invert"
            width={40}
            height={40}
          />
        </div>
        <br />
        <BentoGridSecondDemo />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
