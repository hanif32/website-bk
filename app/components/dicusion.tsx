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
        <>
            <div className="py-40">
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-between items-center bg-white p-8 border rounded-md shadow-md space-x-4 w-4/5">
                        <div className="text-black space-y-2">
                            <h1 className="font-semibold text-3xl">Diskusikan Masalah Pada BK</h1>
                            <p className="font-normal text-sm">Tim BK SMK Telkom Malang siap berdiskusi terkait masalah akademik, sosial, atau pribadi semua siswa</p>
                        </div>
                        <div className="bg-primary flex justify-center items-center p-2 rounded-md space-x-2 text-white">
                            <button className="font-bold text-base">Diskusikan</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="py-14 flex justify-between items-center w-4/5">
                        {
                            data.map(({ id, text, nomor, desc, }: item) => {
                                return (
                                    <div key={id}>
                                        <div className="text-black bg-white py-12 px-8 shadow-lg border rounded-md space-x-40 flex justify-center items-center">
                                            <h1 className="font-semibold text-2xl uppercase">{text}</h1>
                                            <div className="text-left">
                                                <h1 className="font-medium text-4xl">{nomor}</h1>
                                                <p className="font-medium text-xs">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}