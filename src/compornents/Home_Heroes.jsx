import React from "react";
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";


function Home_Heroes() {
    return (
        <div>
            <div className="bg-black text-primary_text justify-center flex">

                <div className="sm:space-y-1 md:space-y-1 lg:space-y-2 xl:space-y-3 xxl:space-y-3 sm:mt-6 md:mt-8 lg:mt-10 xxl:mt-12 pt-10">
                    <h1 className="font-medium text-6xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> iPhone 14 Pro</h1>
                    <h2 className="text-center text-2xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Pro.Beyond.</h2>
                    <div className="flex items-center justify-center text-link_color space-x-5 text-xl ">
                        <div className="flex place-items-center">
                            <h1>Learn more </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className="flex place-items-center">
                            <h1> Buy </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <img className="w-full" src="https://www.apple.com/lae/iphone-14-pro/images/key-features/hero/hero__cj6i78tzkp8i_large.jpg" alt="iphone 14 pro"/>
                </div>
            </div>

            <div className="bg-secondary_background text-secondary_text justify-center flex">
                <div className="sm:space-y-1 md:space-y-1 lg:space-y-2 xl:space-y-3 xxl:space-y-3 sm:mt-6 md:mt-8 lg:mt-10 xxl:mt-12">
                    <h1 className="font-medium text-6xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> iPhone 14</h1>
                    <h2 className="text-center text-2xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Two great sizes.<br></br> Now with a splash of yellow.</h2>
                    <div className="flex items-center justify-center text-link_color space-x-5 text-xl ">
                        <div className="flex place-items-center">
                            <h1>Learn more </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className="flex place-items-center">
                            <h1> Buy </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <img className="w-full" src="https://www.apple.com/v/iphone-14/i/images/meta/iphone-14_overview__50yr9pd9hfm2_og.png" alt="iphone 14 pro" />
                </div>
            </div>



            <div className="bg-black text-primary_text justify-center flex">
                <div className="sm:space-y-1 md:space-y-1 lg:space-y-2 xl:space-y-3 xxl:space-y-3 sm:mt-6 md:mt-8 lg:mt-10 xxl:mt-12 ">
                    <div className="flex items-center justify-center">
                        <img className="sm:w-24 md:w-32 lg:w-40 xl:w-44 xxl:w-48" src=""/>
                    </div>
                    <h2 className="text-center text-2xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl">A healthy leap ahead.</h2>
                    <div className="flex items-center justify-center text-link_color space-x-5 text-xl ">
                        <div className="flex place-items-center">
                            <h1>Learn more </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className="flex place-items-center">
                            <h1> Buy </h1>
                            <p><IoIosArrowForward /></p>
                        </div>
                    </div>
                    <img className="w-full" src="https://www.apple.com/v/apple-watch-series-8/c/images/meta/gps-lte__gi7uzrvkt5e2_og.png" alt="iphone 14 pro" />
                </div>
            </div>

        </div>


    )
}

export default Home_Heroes
