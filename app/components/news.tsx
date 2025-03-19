import React from 'react'
import img1 from '@/public/images/news/img1.png'
import img2 from '@/public/images/news/img2.png'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

interface item {
    id: number,
    img: any,
    sub: string,
    title: string,
    date: string,
    desc: string
}

interface blog {
    id: number,
    title: string,
    date: string,
    sub: string
}

const blogData: blog[] = [
    {
        id: 1,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
    {
        id: 2,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
    {
        id: 3,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
]

const itemData: item[] = [
    {
        id: 1,
        img: img1,
        sub: 'exercise',
        title: 'Layanan Walas',
        date: '02 Nov, 2023',
        desc: 'Guru BK bersama wali kelas membersamai siswa terkait kelanjutan masalah yang sudah disampaikan melalui pesan di BK-MOCO'
    },
    {
        id: 2,
        img: img2,
        sub: 'exercise',
        title: 'Layanan Walas',
        date: '02 Nov, 2023',
        desc: 'Guru BK bersama wali kelas membersamai siswa terkait kelanjutan masalah yang sudah disampaikan melalui pesan di BK-MOCO'
    }
]

export function News() {
    return (
        <div className='pt-12 font-roboto h-[3000px]'>
            <div className='px-36 w-full'>
                <div className='flex justify-between items-center pb-10'>
                    <div className='w-full'>
                        <h1 className='font-normal uppercase text-xl text-primary'>News & Press Release</h1>
                        <h1 className='font-semibold text-black text-3xl leading-7'>Berita Terakhir</h1>
                    </div>
                    <div className="flex justify-center text-white items-center bg-primary space-x-4 p-3 w-[206px] rounded-lg">
                        <button className="font-normal text-base">See All Blog</button>
                        <FaArrowRightLong className="text-white " />
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-x-8'>
                        {
                            itemData.map(({ id, img, sub, title, date, desc }: item) => {
                                return (
                                    <div className='space-y-3' key={id}>
                                        <Image src={img} alt="Image" className='w-[351px] h-[234px]' />
                                        <div className='text-left max-w-[337px]'>
                                            <p className='font-normal text-base text-black'>{sub}</p>
                                            <h1 className='font-semibold text-2xl text-black'>{title}</h1>
                                            <p className='text-primary font-normal text-'>{date}</p>
                                            <p className='font-normal text-base text-gray'>{desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        {/* {
                    blogData.map(({ id, title, date, sub }: blog) => {
                        return (
                            <div key={id}>
                                <h1>{title }</h1>
                                <div>
                                    <p>{date}</p>
                                    <p>{sub}</p>
                                </div>
                            </div>
                        )
                    })
                } */}
                    </div>
                </div>
            </div>
        </div>
    )
}