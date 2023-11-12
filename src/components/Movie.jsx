import React from 'react'
import { BiMovie, BiSolidMovie } from "react-icons/bi";
import { useState } from 'react';

const Movie = ({ item }) => {
    const [like, setlike] = useState(false);
    return (
        <div
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        >
            <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                </p>
                <p>
                    {like ?
                        <BiMovie className="absolute top-4 left-4 text-gray-300" />
                        :
                        <BiSolidMovie className="absolute top-4 left-4 text-gray-300" />}
        </p>
            </div>
        </div>
    );
}

export default Movie