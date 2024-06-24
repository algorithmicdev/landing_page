"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { FaCircle } from "react-icons/fa";
import TextComponent from './components/textComponent';
import TradeCard from './components/tradeCard';
import StakeCard from './components/stakeCard';
import { useMedia } from "react-use";

export default function Home() {
  const isMobile = useMedia("(max-width: 1100px)");

  return (
    <>
    {/* ----------------------------------------------MOBIILE-View---------------------------------------------- */}
       {isMobile?(
       <div>
        
GM
         {/* ----------------------------------------------MOBIILE-View ENDS---------------------------------------------- */}
       </div>)
      :
      (
      <>
       <Header/>
       <section style={{display:"flex", flexDirection:"row", gap:"17rem", justifyContent:"center"}}>
                <TextComponent/>
                <div style={{display:"flex", flexDirection:"column",  marginTop:"5rem", gap:"1rem"}}>
                  <TradeCard/>
                  <StakeCard/>
                </div>
       </section>
      
       <Footer/>
      </>
      )
     }
    </>
  )
}
