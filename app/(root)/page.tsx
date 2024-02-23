import Image from "next/image";
import {Heading} from "./_components/heading"
import {Hero} from "./_components/hero"

const LandingPage = () => {
  return (
    <div className="min-h-full max-h-screen overflow-hidden bg-[#EFE8E0]">
      <div className="w-screen h-screen flex flex-col items-center justify-center text-center flex-1 gap-y-8 px-6 relative">
        <Heading />
      </div>
      <Hero />
    </div>
  );
}

export default LandingPage;
