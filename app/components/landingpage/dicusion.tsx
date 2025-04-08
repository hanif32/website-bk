"use client"
import { FaArrowRightLong } from "react-icons/fa6";

interface item {
    id: number;
    text: string;
    nomor: number;
    desc: string;
}
const data: item[] = [
    {
        id: 1,
        text: "dilaporkan",
        nomor: 120,
        desc: "kasus"
    },
    {
        id: 2,
        text: "diproses",
        nomor: 120,
        desc: "kasus"
    },
    {
        id: 3,
        text: "selesai",
        nomor: 120,
        desc: "kasus"
    },
]

export default function Discusion() {
    return (
        <div className="py-16 px-6 bg-white font-roboto relative h-[1000px]">
            <div className="max-w-7xl mx-auto">
                <div className="absolute -top-5">
                    <div className="bg-white shadow-xl p-5 rounded-md">
                        <div className="text-black space-y-3">
                            <h1 className="font-semibold text-2xl">Diskusikan Masalah Pada BK</h1>
                            <p className="font-normal text-sm">Tim BK SMK Telkom Malang siap berdiskusi terkait masalah akademik, sosial, atau pribadi semua siswa</p>
                        </div>
                        <div className="bg-primary py-2 px-4 rounded-md w-36 flex justify-center items-center space-x-4 mt-4">
                            <button>Diskusikan</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className="space-y-4 mt-10">
                        {
                            data.map((datas) => {
                                return (
                                    <div key={datas.id}>
                                        <div className="text-black bg-white py-5 px-5 drop-shadow-lg rounded-md gap-5 flex justify-between items-center">
                                            <h1 className="text-xl font-semibold capitalize">{datas.text}</h1>
                                            <div className="font-medium">
                                                <h1 className="text-2xl">{datas.nomor}</h1>
                                                <p className="text-xs">{datas.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}