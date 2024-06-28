"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import "./mHeader.css";
import { useMedia } from 'react-use';

export default function MHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMedia("(max-width: 1100px)");
    const [selectedLink, setSelectedLink] = useState('Home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };
      useEffect(() => {
        if (isOpen && isMobile) {
          document.body.style.overflow = 'hidden';
        } else if((!isOpen && isMobile)){
          document.body.style.overflow = 'auto';
        }
    },[isOpen, isMobile])

  return (
    <>
 <div className="flex gap-6 justify-between items-center w-full border-b border-solid bg-neutral-950 border-white border-opacity-20 max-md:flex-wrap ">
      
      <a href='/' target='_blank' rel="noreferrer">
        <Image
                    loading="lazy"
                    src="/nlx_logo.svg"
                    className="shrink-0 self-stretch my-auto " alt={''} 
                    width={80}     
                    height={20}
                    draggable="false"
                    style={{width:"8rem", padding:"1rem"}}
        />
      </a>

      <div className="flex gap-5 " style={{padding:"1rem", marginBlock:"auto"}} onClick={toggleMenu}>
        {isOpen ? <RxCross1 size={25} style={{zIndex:"11"}}/> : <RxHamburgerMenu size={25} color='gray' />}
      </div>
        <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} text-xl text-zinc-500 md:ml-0`} style={{height:"100%",width:"100%", zIndex:"10", position:"absolute", top:"0", background:"rgba(23,24,44,.533) 0 0 no-repeat padding-box", backdropFilter:"blur(1.7rem)", boxShadow:".8rem .3rem .6rem rgba(0,0,0,.161)"}}>
        <a href='/' target='_blank' rel="noreferrer"> 
        <Image
                    loading="lazy"
                    src="/nlx_logo.svg"
                    className="shrink-0 self-stretch my-auto " alt={''} 
                    width={80}     
                    height={20}
                    draggable="false"
                    style={{width:"8rem", padding:"1rem"}}
        />
      </a>
        {/* <hr style={{opacity:"30%"}}/> */}
        <div   style={{ display:"flex", flexDirection:"column", }}>
        <a href='/' target='_blank' rel="noreferrer" onClick={() => handleLinkClick('Home')}>
          <div className={`px-4 ${selectedLink === 'Home' ? 'selected' : ''}`} style={{paddingBlock:"0.5rem", paddingLeft:"1rem"}}>Home</div>
        </a>
        <a href='https://beta.nlx.trade/' target='_blank' rel="noreferrer" onClick={() => handleLinkClick('App')}>
          <div className={`px-4 ${selectedLink === 'App' ? 'selected' : ''}`} style={{paddingBlock:"0.5rem", paddingLeft:"1rem"}}>App</div>
        </a>
        <a href='https://bridge.coredao.org/bridge' target='_blank' rel="noreferrer" onClick={() => handleLinkClick('Bridge')}>
          <div className={`px-4 ${selectedLink === 'Bridge' ? 'selected' : ''}`} style={{paddingBlock:"0.5rem", paddingLeft:"1rem"}}>Bridge</div>
        </a>
        <a href='https://nlx.mintlify.app/introduction' target='_blank' rel="noreferrer" onClick={() => handleLinkClick('Docs')}>
          <div className={`px-4 ${selectedLink === 'Docs' ? 'selected' : ''}`} style={{paddingBlock:"0.5rem", paddingLeft:"1rem"}}>Docs</div>
        </a>
        <a href='https://github.com/NLX-Protocol/nlx-synthetics' target='_blank' rel="noreferrer" onClick={() => handleLinkClick('Protocol')}>
          <div className={`px-4 ${selectedLink === 'Protocol' ? 'selected' : ''}`} style={{paddingBlock:"0.5rem", paddingLeft:"1rem"}}>Protocol</div>
        </a>
        </div>
      </div>

    </div>
  </>
)
}
