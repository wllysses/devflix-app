'use client'

import { useEffect } from "react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Prices } from "@/components/Prices";

import AOS from "aos";
import 'aos/dist/aos.css';


export default function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    })    
  }, [])

  return (
    <>
      <Header type="initial" />
      <Hero />
      <Prices />
      <FAQ />
      <Footer />
    </>
  )
}
