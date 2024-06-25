"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TextComponent from './components/textComponent';
import TradeCard from './components/tradeCard';
import StakeCard from './components/stakeCard';
import { useMedia } from "react-use";

export default function Home() {
  const isMobile = useMedia("(max-width: 1100px)");
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    handleResize();
    },[]);


  const handleResize = () => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // Add event listener to listen for window resize events
    window.addEventListener('resize', handleResize);


    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(viewportSize)
  console.log(viewportSize.width/viewportSize.height)

  return (
    <>
    {/* ----------------------------------------------MOBIILE-View---------------------------------------------- */}
       {isMobile?(
       <div>
        
 GM 
         {/* ----------------------------------------------MOBIILE-View ENDS---------------------------------------------- */}
       </div>)
      :
      ((viewportSize.height!==0 && viewportSize.width!==0)?
      <>
      <Header />
      <div>{"dimensions:"+viewportSize.height/1000+"x"+viewportSize.width+", mt="+(viewportSize.height/1000 + 0.27)*5}</div>
       <section style={{display:"flex", flexDirection:"row", gap:"17rem", justifyContent:"center", 
        scale:(viewportSize.height/1000 + 0.27),
        marginTop:`${(viewportSize.height/1000 + 0.27)*5}rem`
        }}>
                <TextComponent/>
                <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                  <TradeCard/> 
                  <StakeCard/>
                </div> 
       </section>
      
       <Footer/>
      </>:
      ""
      )
     }
    </>
  )
}
