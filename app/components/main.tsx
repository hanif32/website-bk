import Image from "next/image"
import smk from "../../public/images/sekolah.png"

export default function Main() {
    return (
        <div className="w-full h-full font-roboto">
            <div className="w-full absolute top-14 -z-10">
                <div className="relative">
                    <Image
                        src={smk}
                        alt="foto smk telkom malang"
                        className="w-full object-cover" />
                    <div className="bg-black w-full h-full opacity-25 absolute top-0">{""}</div>
                </div>
            </div>
            <div className="flex justify-start py-28 px-40">
                <div className="w-1/2">
                    <div className="text-3xl font-semibold">
                        <h1>Reclaim Your Happiness and Balance: “BK-Moco.com” 's Online Counseling for
                            Positive Learning</h1>
                        <p>You're not alone on this journey. Our compassionate counselors are here to guide you.</p>
                        <div>
                            <button>Start Your Healing Journey Toda</button>
                            <button>Schedule Your Counseling Session</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}