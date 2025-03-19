import React from 'react'
import img1 from '@/public/images/news/img1.png'
import img2 from '@/public/images/news/img2.png'
import Image from 'next/image'

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
        id: 1,
        img: img2,
        sub: 'exercise',
        title: 'Layanan Walas',
        date: '02 Nov, 2023',
        desc: 'Guru BK bersama wali kelas membersamai siswa terkait kelanjutan masalah yang sudah disampaikan melalui pesan di BK-MOCO'
    }
]

export function News () {
    return (
        <div className='pt-36 font-roboto'>
            <div>
                <div>
                <h1></h1>
                <h1></h1>
                </div>
                <button>dfsf</button>
            </div>
            <div>
                <div>
                {
                    itemData.map(({id, img, sub, title, date, desc}: item) => {
                        return (
                            <div key={id}>
                                <div>
                                <Image src={img} alt="Image" className=''/>
                                    <p>{sub}</p>
                                    <h1>{title}</h1>
                                    <p>{date}</p>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                {
                    blogData.map(({id, title, date, sub}: blog) => {
                        return (
                            <div key={id}>
                                <h1>{}</h1>
                                <div>
                                    <p>{}</p>
                                    <p>{}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}