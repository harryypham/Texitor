import Image from "next/image";

export const Hero = () => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden ">
            <div className="relative w-full h-full">
                <div className="absolute hidden md:block left-10 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] md:top-0 lg:top-[10%]">
                    <Image src="/doodle1.svg" fill className="object-contain" alt="dog" />
                </div>
                <div className="absolute hidden md:block right-5 md:w-[300px] md:h-[300px] md:bottom-0 lg:bottom-[15%]">
                    <Image src="/doodle2.svg" fill className="object-contain" alt="reading" />
                </div>
                <div className="absolute hidden md:block md:w-[300px] sm:h-[300px] md:top-[69%] md:left-[30%] lg:bottom-0">
                    <Image src="/doodle3.svg" fill className="object-contain" alt="lying" />
                </div>
            </div>
        </div>
    )
}