import React from "react";
import { IoIosArrowForward } from "react-icons/io";


function Hero_Grid() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 sm:pt-3 ml-3 mr-3 sm:ml-0 sm:mr-0 mb-10">

            <div className="bg-black p-10 ml-3 sm:m-0">
                <div className="flex items-center justify-center">
                    <img className="" src="https://developer.apple.com/wwdc23/images/og/wwdc23-p1-og.png" alt="iphone 14 pro" />
                </div>
                <h2 className="text-primary_text text-center text-2xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl pt-5">Apple Worldwide Developers Conference.<br></br> Join us online June 5‑9.</h2>
                <div className="flex items-center justify-center text-link_color text-xl pt-2">
                    <div className="flex place-items-center">
                        <h1>Learn more </h1>
                        <p><IoIosArrowForward /></p>
                    </div>
                </div>
            </div>


            <div className="text-primary_text bg-cover bg-center sm:m-0" style={{ backgroundImage: `url(https://tidbits.com/uploads/2019/12/woman-wearing-airpods-pro.jpg)` }}>
                <h1 className="font-medium text-6xl text-center sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:pt-8"> Airpod Pro</h1>
                <h2 className="text-center text-2xl sm:text-lg md:text-lg lg:text-lg xl:text-xl pt-5">Up to 2x more <br></br> Active Noise Cancellation</h2>
                <div className="flex items-center justify-center text-primary_text space-x-5 text-xl ">
                    <div className="flex place-items-center">
                        <h1>Learn more </h1>
                        <p><IoIosArrowForward /></p>
                    </div>
                    <div className="flex place-items-center">
                        <h1> Buy </h1>
                        <p><IoIosArrowForward /></p>
                    </div>
                </div>
            </div>


            <div className="bg-black text-primary_text ml-3 sm:m-0 sm:pt-5">
                <h1 className="font-medium text-6xl text-center sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:pt-8"> Macbok Pro</h1>
                <h2 className="text-center text-2xl sm:text-lg md:text-lg lg:text-lg xl:text-xl pt-5 pb-4">Supercharged by M2 Pro and M2 Max</h2>
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
                <div className="flex items-center justify-center">
                    <img className="" src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png" alt="iphone 14 pro" />
                </div>
            </div>



            <div className="bg-secondary_background">
                <h1 className="font-medium text-6xl text-center sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:pt-8"> iPad</h1>
                <h2 className="text-secondary_text text-center text-2xl sm:text-lg md:text-lg lg:text-lg xl:text-xl pt-5">Apple Worldwide Developers Conference.<br></br> Join us online June 5‑9.</h2>
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
                <div className="flex items-center justify-center">
                    <img className="" src="https://www.fono.lk/wp-content/uploads/2022/09/ipad-mini-6-front.jpg" alt="iphone 14 pro" />
                </div>
            </div>






        </div>
    )
}

export default Hero_Grid