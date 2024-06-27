"use client"
import Image from 'next/image'

export default function MTrade() {
    return (
        <div style={{display:"flex", justifyContent:"center", marginBlock:"1.5rem"}}>
        <div className="pt-3 rounded-md border border-solid border-neutral-800" style={{width:"18rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div style={{fontFamily:"Bebas", fontSize:"1.6rem", alignSelf:"center"}}>Trade with Bitcoin</div>
            <div className="flex gap-3.5 mt-2">
              <div className="flex flex-col self-start">
                <div style={{display:"flex", flexDirection:"row"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem"}}>
                   Use Bitcoin as collateral
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem"}}>
                  PNL and Funding Fees paid in Bitcoin
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem"}}>
                  Trade with up to 50x Leverage
                  </div>
                </div>
              </div>
            </div>
            <div style={{width:"100%"}}>
              <div className=" text-xs underline text-opacity-70 hover:text-gray-300" style={{display:"flex", justifyContent:"center", marginBlock:"0.5rem"}}>
              <a href='https://nlx.mintlify.app/trade' target='_blank' rel="noreferrer"> How to trade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div style={{marginLeft:"3rem"}}>
          <Image
            loading="lazy"
            src="/tradeCandles.svg"
            style={{width:"11rem"}}
            alt=""
            width={1}
            height={1}
            draggable="false"
          />
        </div>
        <a href='https://beta.nlx.trade/#/trade' target='_blank' rel="noreferrer" style={{marginBottom:"2rem"}}>
              <div className="justify-center items-center mt-3 text-white bg-orange-600 rounded shadow-sm hover:bg-orange-700" 
              style={{fontSize:"0.8rem", paddingInline:"4rem", paddingBlock:"0.2rem", display:"flex", justifyContent:"center"}}>
                Trade Now
              </div>
        </a>
    </div>
        </div>
    )
}