import React from "react";
import { AiFillApple } from "react-icons/ai";

function Header() {
    return (
        <div className="bg-home_header w-full fixed">
            <div className="pt-3 pb-3 flex text-center justify-center items-center space-x-20 text-primary_text font-header text-sm font-light">
                <h1 className="text-2xl"><AiFillApple /></h1>
                <h1> Mac</h1>
                <h1> iPad</h1>
                <h1> iPhone</h1>
                <h1> Watch</h1>
                <h1> Airpods</h1>
                <h1> Accessories</h1>
            </div>
        </div>
    )
}

export default Header
