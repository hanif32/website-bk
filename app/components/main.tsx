import Image from "next/image"
import smk from "../../public/images/sekolah.png"

export default function Main() {
    return (
        <div className="w-full font-roboto">
            <div className="absolute top-14 -z-10">
                <div className="relative">
                <Image
                    src={smk}
                    alt="foto smk telkom malang"
                    className="w-full object-cover h-[640px]"/>
                    <div className="bg-gradient-to-t from-black to-black/15 top-0 absolute w-full h-[640px]">{""}</div>
                </div>
            </div>
            <div className="flex justify-start py-28 px-40">
                <div className="w-2/3">
                    <div className="font-bold text-4xl text-wrap">
                        <h1>Reclaim Your Happiness and Balance: “BK-Moco.com” 's Online Counseling for <br /> Positive Learning</h1>
                        <p className="font-normal text-lg py-4">You're not alone on this journey. Our compassionate counselors are here to guide you.</p>
                        <div className="text-base font-normal flex justify-start items-center space-x-8">
                            <button className="text-white font-normal bg-primary px-4 py-2 rounded-md">Start Your Healing Journey Toda</button>
                            <button className="text-white bg-transparent px-4 py-2 rounded-md font-norma border-2 border-white">Schedule Your Counseling Session</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}