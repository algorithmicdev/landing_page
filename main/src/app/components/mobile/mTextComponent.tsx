"use client"
import Image from 'next/image'
import { FaCircle } from 'react-icons/fa';

export default function MTextComponent() {
  return (
    <>
 <section>
      <div className="flex flex-col self-start px-5 max-md:max-w-full" style={{width:"100%", alignItems:"center", backgroundImage:"url(./bottomLeft.svg)", backgroundRepeat:"no-repeat" , backgroundSize:"53rem", backgroundPositionX:"-6rem", backgroundPositionY:"4.1rem"}}>
                
                     <span style={{lineHeight:"5.5rem", scale:"0.9", marginTop:"2rem", marginBottom:"1rem"}}>
                       <div className="flex gap-3 max-md:flex-wrap" style={{fontFamily:"Bebas", fontSize:"3rem", marginBottom:"-0.7rem"}}>
                         ON-CHAIN
                         <span style={{display:"flex", justifyContent:"center", marginBottom:"0.5rem"}}>
                          <div/>
                         <Image
                           loading="lazy"
                           src="/text_Design.svg"
                           className="shrink-0 my-auto aspect-[1.05] w-[27.5px]"
                           alt=''
                           width={1}
                           height={1}
                           draggable="false"
                         />
                         <div/>
                         </span>
                         PERPS
                       </div>
                       <div style={{fontFamily:"Bebas", fontSize:"7.56rem", marginLeft:"-0.15rem"}}>
                       BACKED
                       </div>
                       <span style={{fontFamily:"Bebas", fontSize:"5.45rem", marginLeft:"-0.05rem"}}>
                       BY BITCOIN
                       </span>
                     </span> 
              
                     <span style={{display:"flex", flexDirection:"row", marginLeft:"", marginTop:"-1.5rem", width:"75%"}}>
                       <FaCircle style={{color:"#EA5B27"}} size={5}/>
                       <hr style={{borderTop:"1px solid #EA5B27", marginTop:"0.15rem", width:"28rem"}}/>
                       <FaCircle style={{color:"#EA5B27"}} size={5}/>
                     </span>
                     <div className="font-medium tracking-widest text-white max-md:mt-10 max-md:max-w-full" style={{fontSize:"0.85rem", marginTop:"1rem", textAlignLast:"center"}}>
                       Trade and Earn BTC with fully on-chain<br />
                       perpetual markets backed by single-sided <br />
                       Bitcoin liquidity
                     </div>

                     <a href='https://beta.nlx.trade/#/trade' target='_blank' rel="noreferrer" style={{marginBlock:"auto"}}>
                      <div className="justify-center text-sm  text-orange-600 rounded border border-orange-600 border-solid hover:bg-zinc-900" style={{fontSize:"x-large", height:"fit-content", paddingBlock:"1rem",paddingInline:"4rem", marginTop:"1.5rem"}}>
                       Go to NLX
                      </div>
                     </a>

                      <div className="text-white text-opacity-50" style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"1rem"}}>
                        <div style={{fontSize:"small"}}>Audited by</div>
                        <Image
                          loading="lazy"
                          src="/halborn_logo.svg"
                          style={{width:"65%", marginTop:"0.65rem"}}
                          alt={''} 
                          width={50} 
                          height={50}
                          draggable="false"
                        />
                      </div>

                      <div className="flex flex-col self-start" style={{alignItems:"center", marginTop:"1rem", width:"100%"}}>
                        <div className=" text-white text-opacity-50" style={{fontSize:"small"}}>
                          Ecosystem Partners
                        </div>
                        <div className="flex px-2 " style={{gap:"1.1rem", marginTop:"0.65rem", justifyContent:"space-between"}}>
                          <Image
                            loading="lazy"
                            src="/core_logo.svg"
                            style={{width:"20%"}}
                            width={50} 
                            height={50}
                            alt={''} 
                            draggable="false"
                          />
                          <Image
                            loading="lazy"
                            src="/pyth_logo.svg"
                            style={{width:"16%"}}
                            width={50} 
                            height={50}
                            alt={''} 
                            draggable="false"
                          />
                          <Image
                            loading="lazy"
                            src="/colend_logo.svg"
                            style={{width:"20%"}}
                            width={50} 
                            height={50}
                            alt={''} 
                            draggable="false"
                          />
                          <Image
                            loading="lazy"
                            src="/glyph_logo.svg"
                            style={{width:"20%"}}
                            width={50} 
                            height={50}
                            alt={''} 
                            draggable="false"
                          />
                        </div>
                         <Image
                            loading="lazy"
                            src="/many.svg"
                            style={{width:"20%",marginTop:"0.65rem"}}
                            width={50} 
                            height={50}
                            alt={''} 
                            draggable="false"
                          />
                     </div>  

                   </div>

      </section>
  </>
)
}
