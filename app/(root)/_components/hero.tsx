import Image from "next/image";

export const Hero = () => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen ">
            <div className="relative w-full h-full">
                <div className="absolute bottom-16 left-10 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px]">
                    <Image src="/doodle1.svg" fill className="object-contain" alt="dog" />
                </div>
                <div className="absolute top-20 right-10 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px]">
                    <Image src="/doodle2.svg" fill className="object-contain" alt="reading" />
                </div>
            </div>
        </div>
    )
}