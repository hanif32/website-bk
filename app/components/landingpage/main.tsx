import Image from "next/image"
import smk from "../../../public/images/sekolah.png"

export default function Main() {
    return (
        <div className="relative w-full h-[640px] overflow-hidden -z-10">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={smk}
                    alt="gambar smk"
                    fill
                    className="hidden lg:block object-cover" />
                <div className="absolute bg-gradient-to-t from-black to-transparent inset-0 hidden lg:block"></div>
            </div>
            <div className="py-16 px-6 font-roboto absolute top-24 lg:top-32">
                <div className="text-black lg:text-white space-y-5 lg:w-[720px]">
                    <h1 className="text-2xl font-bold lg:text-4xl">Reclaim Your Happiness and Balance: “BK-Moco.com” 's Online Counseling for
                        Positive Learning</h1>
                    <p className="text-sm font-normal lg:text-lg">You're not alone on this journey. Our compassionate counselors are here to guide you.</p>
                    <div className="flex justify-start text-xs space-x-5">
                        <button className="bg-primary text-white text-center px-4 py-2 rounded-md lg:text-base lg:px-7">Start Your Healing Journey Today</button>
                        <button className="border border-black lg:border-white rounded-md bg-transparent px-4 py-2 lg:text-base lg:px-7">Schedule Your Counseling Session</button>
                    </div>
                </div>
            </div>
        </div>
    )
}