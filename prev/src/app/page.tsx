"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';

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
       <div
        className="flex flex-col py-6 mobile:py-36 px-8 w-[100vw] min-h-[100vh]  items-center justify-center bg-fixed -z-1 "
        style={{
          backgroundImage: "url(./nlx_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "black",
        }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="z-10 flex flex-col items-center justify-center" style={{marginBottom: '200px' }}>
           <Image src={'/nlx_mobile_logo.png'} loading="lazy" alt={''} width={300} height={100} className='flex flex-col items-center justify-center no-drag ' draggable="false" style={{marginBottom: '3.5rem'}}/>
           <span className='text-[#FF6633] flex flex-row items-center justify-center ' >
              <div className='flex flex-col'>
              <span className='text-[#FF6633] items-center justify-center' style={{fontSize:'5rem', fontFamily:'Quartz'}}>
                {timeLeft.days}
              </span>
              <span className='text-[#FF6633] items-center justify-center ' style={{marginInline: 'auto',  fontFamily:'Quartz', fontSize: '1rem'}}>
                DAYS
              </span>
              </div>
              <span className='text-[#FF6633]  justify-center' style={{fontSize:'3rem', marginBottom: '30px', }}>
                :
              </span>
              <div className='flex flex-col'>
              <span className='text-[#FF6633] items-center justify-center' style={{fontSize:'5rem', fontFamily:'Quartz'}}>
                {timeLeft.hours}
              </span>
              <span className='text-[#FF6633] items-center justify-center' style={{marginInline: 'auto', fontFamily:'Quartz', fontSize: '1rem'}}>
                HRS
              </span>
              </div>
              <span className='text-[#FF6633]  justify-center' style={{fontSize:'3rem', marginBottom: '30px', }}>
                :
              </span>
              <div className='flex flex-col'>
              <span className='text-[#FF6633] items-center justify-center' style={{fontSize:'5rem', fontFamily:'Quartz'}}>
                {timeLeft.minutes}
              </span>
              <span className='text-[#FF6633] items-center justify-center' style={{marginInline: 'auto', fontFamily:'Quartz', fontSize: '1rem'}}>
                MINS
              </span>
              </div>
              <span className='text-[#FF6633]  justify-center' style={{fontSize:'3rem', marginBottom: '30px', }}>
                :
              </span>
              <div className='flex flex-col'>
              <span className='text-[#FF6633] items-center justify-center' style={{fontSize:'5rem', fontFamily:'Quartz', width: '60px'}}>
                {timeLeft.seconds}
              </span>
              <span className='text-[#FF6633] items-center justify-center' style={{marginInline: 'auto', fontFamily:'Quartz', fontSize: '1rem'}}>
                SECS
              </span>
              </div>
           </span>
           <Image src={'/nlx_logoremovebg.png'} loading="lazy" alt={'concept design'} width={2400} height={100} className='flex flex-col items-center justify-center no-drag ' draggable="false" style={{position: 'absolute', bottom: '30px'}}/>
          
           <span className='text-[#FF6633] flex flex-row items-center justify-center ' style={{ fontSize:'1rem'}}>
              <a href="https://x.com/nlx_trade" target='_blank' className='text-[#FF6633] items-center justify-center' style={{position: 'absolute', top: '30px', left: '34px'}}>
                TWITTER
              </a>
              <span className='text-[#FF6633] items-center justify-center' style={{position: 'absolute', top: '30px',}}>
                DISCORD
              </span>
              <span className='text-[#FF6633] items-center justify-center' style={{position: 'absolute', top: '30px', right: '34px'}}>
                DOCS
              </span>
           </span>
         </div>

         {/* ----------------------------------------------MOBIILE-View ENDS---------------------------------------------- */}
      </div>)
      :
      (
      <>
       <Header/>
       <section style={{display:"flex", }}>
        <div>
          
        </div>
        <div>
           <div>
                   <div className="flex flex-col self-start px-5 max-md:max-w-full" style={{marginLeft:"20rem", width:"66%"}}>
                     <div className="flex gap-4 max-md:flex-wrap">
                       <img
                         loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70285ad522f2a01fdcf09d22696ead30987aab8b2944a177b7abf87aba19632?"
                         className="aspect-[4] w-[262px]"
                       />
                       <img
                         loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6049c25bbd6f120c4e3940512134521ff07a31a08cf12db5720e7e68d8f436?"
                         className="shrink-0 my-auto aspect-[1.05] w-[37px]"
                       />
                       <img
                         loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb32ad19cfc727deb358c8d969e80426c3d461b1dcd8fc342aab349b57403d5d?"
                         className="shrink-0 max-w-full aspect-[2.5] w-[167px]"
                       />
                     </div>
                     <img
                       loading="lazy"
                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/b024d730767c56d7e73e2e6c66e65f8e4085ecca5467e7ba3c6acf801855f4e8?"
                       className="mt-3 max-md:max-w-full"
                       style={{width:"94%"}}
                     />
                     <img
                       loading="lazy"
                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db8050a6eb7180e8e07c3da5d589b9778ac2f4da8d4894a8c805ecfcc211bf8?"
                       className="mt-5  max-md:max-w-full"
                       style={{width:"94%"}}
                     />
                     <div className="mt-16 font-medium tracking-widest text-white max-md:mt-10 max-md:max-w-full" style={{fontSize:"1.5rem"}}>
                       Leverage your Bitcoin on-chain like <br />
                       never before
                     </div>
                   </div>
 
           </div>
           <div>
 
           </div>  
        </div>
       </section>
      
       <Footer/>
      </>
      )
     }
    </>
  )
}
