import { ReactNode } from "react";
import { GrCertificate } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { TbMessageCancel } from "react-icons/tb";
import img from "@/public/images/power.png"
import Image from "next/image";


interface data {
    id: number;
    icon: ReactNode;
    title: string;
    sub: string;
}

const icon: data[] = [
    {
        id: 1,
        icon: <GrCertificate />,
        title: "Terpercaya",
        sub: "Rahasia aman dan berjalan normal",
    },
    {
        id: 2,
        icon: <IoDiamondOutline />,
        title: "Solutif",
        sub: "Rahasia aman dan berjalan normal",
    },
    {
        id: 3,
        icon: <TbMessageCancel />,
        title: "Privasi Terjaga",
        sub: "Rahasia aman dan berjalan normal",
    },
]


export default function Power() {
    return (
        <>
            <div className="px-36 w-full font-roboto">
                <div className="space-y-8 relative">
                    <div className="space-y-1">
                        <h2 className="font-normal text-xl text-primary">Focusing on you, with the best therapeutic care.</h2>
                        <h1 className="text-black font-semibold text-3xl">Kelebihan Kami</h1>
                        <p className="font-normal text-gray text-lg pt-2 w-[676px]">Dengan mengusung slogan Terpercaya, Solutif dan Privasi Terjaga demi memberikan solusi terbaik.</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div>
                            {
                                icon.map(({ id, icon, title, sub }: data) => {
                                    return (
                                        <div key={id}>
                                            <div className="flex justify-center items-center space-x-4 pb-8">
                                                <div className="text-amber-300 text-5xl">
                                                    {icon}
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h1 className="font-semibold text-black text-2xl">{title}</h1>
                                                        <p className="font-normal text-gray text-base">{sub}</p>
                                                    </div>
                                                    <div className="">
                                                        <div className="border-b-2 border-black/20 w-[500px] -rotate-180">{''}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Image
                        src={img}
                        alt="Gambar Konsuling" 
                        className="absolute -top-20 -right-[144px]"/>
                </div>
            </div>
        </>
    )
}