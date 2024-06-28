"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TextComponent from './components/textComponent';
import TradeCard from './components/tradeCard';
import StakeCard from './components/stakeCard';
import { useMedia } from "react-use";
import MHeader from './components/mobile/mHeader';
import MFooter from './components/mobile/mFooter';
import { FaCircle } from 'react-icons/fa';
import MTextComponent from './components/mobile/mTextComponent';
import MTrade from './components/mobile/mTrade';
import MStake from './components/mobile/mStake';

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
       {isMobile?((viewportSize.height!==0 && viewportSize.width!==0)?
      <>
      <MHeader/>
       <MTextComponent/>
        <MTrade/>
        <MStake/>
      <MFooter/>
      </>:
      ""
      )
      :
      ((viewportSize.height!==0 && viewportSize.width!==0)?
      <>
      <Header />
      {/* <div style={{position:"absolute", bottom:"0", right:"0", zIndex:"999"}}>{"scale:"+(viewportSize.height/1000 + 0.27)+"dimensions:"+viewportSize.height/1000+"x"+viewportSize.width+", mt="+(viewportSize.height/1000 + 0.27)*5}</div> */}
       <section style={{display:"flex", flexDirection:"row", gap:"17rem", justifyContent:"center", 
        scale:(viewportSize.height/1000 + 0.27)<1.364?(viewportSize.height/1000 + 0.27):(viewportSize.height/1000 + 0.27)*1.1,
        marginTop:`${(viewportSize.height/1000 + 0.27)<1.36?
          ((viewportSize.height/1000 + 0.27)<1 ? 2 : ((viewportSize.height/1000 + 0.27)*5))
          :
          ((viewportSize.height/1000 + 0.27)*12)}rem`
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
