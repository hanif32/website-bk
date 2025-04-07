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
        <div className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

            </div>
        </div>
    )
}