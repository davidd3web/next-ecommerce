"use client"
import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/2678418/pexels-photo-2678418.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/70370/ship-hainan-china-skyline-70370.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/3663899/pexels-photo-3663899.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <div className="">
                    <Image src={images[index].url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
                </div>
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                        <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages