"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { FaCircle } from "react-icons/fa";
import TextComponent from './components/textComponent';
import TradeCard from './components/tradeCard';
import StakeCard from './components/stakeCard';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (not available during SSR)
    if (typeof window !== 'undefined') {
      // Update isMobile state based on window width
      setIsMobile(window.innerWidth <= 768);

      // Add event listener to update isMobile state on window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-01-14T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    } else {
      console.log('Target date has passed!');
    }
  };

  const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
