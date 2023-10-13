import React from "react";
import { AiFillApple } from "react-icons/ai";
import Header from "@/compornents/Header";
import Home_Heroes from "@/compornents/Home_Heroes";
import Hero_Grid from "@/compornents/Hero_Grid";
import Footer from "@/compornents/Footer";

export default function Home() {
  return (
        <div>
            <Header/>
            <Home_Heroes/>
            <Hero_Grid/>
            <Footer/>
        </div>
  )
}
