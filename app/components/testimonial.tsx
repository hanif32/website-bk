import Image from "next/image"


import petik from "@/public/images/Vector.png"
import pria from "@/public/images/Testimonial/pria.png"
import wanita from "@/public/images/Testimonial/wanita.png"

interface data {
    id: number;
    img: any;
    name: string;
    sub: string;
    value: string;
    alt: string;
}

const testi: data[] = [
    {
        id: 1,
        img: pria,
        name: "Hanif",
        sub: "Siswa RPL 32",
        value: "Dukungan dari tim BK membuat saya merasa lebih kuat dan mampu menghadapi tantangan di sekolah. Terima kasih atas bantuannya!",
        alt: "Gambar Pria"
    },
    {
        id: 2,
        img: wanita,
        name: "Abim",
        sub: "Siswa TKJ 32",
        value: "Tim BK membantu saya mengatasi masalah akademik dan sosial dengan baik. Saya merasa lebih percaya diri dan didukung.",
        alt: "Gambar Wanita"
    },
]




export default function Testimonials() {
    return (
        <div className="pt-36">
            <div className="bg-abu w-full p-8 h-[453px] font-roboto">
                <div className="flex">
                    <div className="px-36">
                        <h3 className="font-normal text-xl text-primary">TESTIMONIALS</h3>
                        <h1 className="font-semibold text-3xl text-background">Apa yang Mereka Katakan...</h1>
                        <p className="font-normal text-base text-gray w-[268px]">Testimoni dari siswa terkait curhatan bersama BK</p>
                    </div>
                    {
                        testi.map((item) => {
                            return (
                                <div className="pt-6 px-6" key={item.id}>
                                    <div className="z-10 relative">
                                        <div className="bg-white p-8 rounded-lg space-y-3 h-[231px] w-[310px]">
                                            <Image
                                                src={petik}
                                                alt="petik"
                                                height={42}
                                                width={53} />
                                            <p className="font-bold text-base text-gray">{item.value}</p>
                                        </div>
                                        <div className=" -z-10 absolute left-10 -bottom-4">
                                            <span className="h-7 w-7 inline-block bg-white rotate-45 shadow-md">{""}</span>
                                        </div>
                                    </div>
                                    <div className="flex px-4 space-x-4 items-center py-8">
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            width={68}
                                            height={68}
                                            className="rounded-full" />
                                        <div className="text-black">
                                            <h1 className="font-semibold text-xl">{item.name}</h1>
                                            <p className="font-normal text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}