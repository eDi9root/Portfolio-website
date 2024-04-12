import React from "react";
import { SOCIALS } from "../utils/data"

function Footer() {
    const name = "JO.";
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div>
            <div className="w-[100%] h-px bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900"></div>
            <div className="w-[100%] flex sm:justify-between px-20 my-10 justify-center items-center gap-10 max-sm:flex-col
            ">
                <p className="caption text-neutral-400 lg:block">Created by { name } Copyright © { year }</p>
                <ul className="flex gap-5 flex-wrap">
                    {SOCIALS.map((item) => ( 
                        <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center
                        w-10 h-10 bg-n-7 rounded-full transition-colors hover: bg-neutral-600 hover:text-zinc-300">
                            <p className="w-[16] h-[16]">
                                {< item.img />}
                            </p>
                        </a>
                    ))}
                </ul>
                    
            </div>
        </div>
    );
}

export default Footer