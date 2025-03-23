import Image from "next/image"
import foto from "@/public/images/Mask group.png"
import { FaCheckCircle } from "react-icons/fa"

export default function About() {
    return (
        <div className="pt-10 font-roboto" id="about">
            <div className="w-full bg-abu flex items-center h-[666px] p-10 space-x-8">
                <div className="flex justify-center space-x-8">
                    <Image
                        src={foto}
                        alt="foto BK"
                        width={738}
                        height={513} />
                    <div className="relative">
                        <div className="absolute -top-9">
                            <h1 className="font-normal text-xl text-primary">Tentang Kami</h1>
                            <div>
                                <h1 className="font-semibold text-3xl text-black w-[400px]">BK: Sahabat Siswa dan Sahabat di Setiap Langkah</h1>
                                <p className="w-[579px] font-normal text-lg text-gray">Program BK untuk memberikan dampak kepada permasalah yang terjadi di dalam dan  sekolah</p>
                            </div>
                            <div className="pt-5 pb-9 space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-gray/45 text-3xl" />
                                    <p className="font-normal text-lg text-gray">Layanan Siswa dan Orang Tua</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-gray/45 text-3xl" />
                                    <p className="font-normal text-lg text-gray">Kunjungan ke Rumah dan Undangan ke Sekolah</p>
                                </div>
                            </div>
                            <div className="flex justify-center bg-primary rounded-3xl p-8 space-x-16 px-12 absolute -left-60">
                                <div className="text-white space-y-3 ">
                                    <h1 className="font-semibold text-3xl">Misi</h1>
                                    <p className="font-normal text-base w-[302px]">Memberikan informasi dan edukasi kepada siswa tentang pentingnya menjaga kesehatan mental.</p>
                                </div>
                                <div className="border-1 border-white h-[158px] ">{''}</div>
                                <div className="text-white space-y-3">
                                    <h1 className="font-semibold text-3xl">Pendekatan</h1>
                                    <p className="font-normal text-base  w-[302px]">Undang ahli kesehatan mental atau psikolog untuk menulis artikel. Pastikan artikel tersebut mudah dipahami oleh siswa dan relevan dengan kehidupan sehari-hari mereka.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}