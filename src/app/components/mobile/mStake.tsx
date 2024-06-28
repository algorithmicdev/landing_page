"use client"
import Image from 'next/image'

export default function MStake() {
    return (
        <div style={{display:"flex", justifyContent:"center", marginBlock:"1.5rem",backgroundImage:"url(./bottomLeft.svg)", backgroundRepeat:"no-repeat" , backgroundSize:"53rem", backgroundPositionX:"-6rem", backgroundPositionY:"8.5rem"}}>
        <div className="pt-3 rounded-md border border-solid border-neutral-800" style={{width:"18rem", display:"flex", flexDirection:"column", alignItems:"center", background:"black"}}>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div style={{fontFamily:"Bebas", fontSize:"1.6rem", alignSelf:"center"}}>Earn yield in Bitcoin</div>
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
                  Single-sided Bitcoin staking
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
                  Earn Borrow APR and Trading fees
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", marginTop:"-1rem"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem", paddingTop:"1rem"}}>
                  Maintain delta-neutral exposure <br/>to Bitcoin
                  </div>
                </div>
              </div>
            </div>
            <div style={{width:"100%"}}>
              <div className=" text-xs underline text-opacity-20 hover:text-gray-300 " style={{display:"flex", justifyContent:"center", marginBlock:"0.5rem"}}>
              <a href='https://nlx.mintlify.app/liquidity' target='_blank' rel="noreferrer"> How to stake liquidity</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div >
          <Image
            loading="lazy"
            src="/mCoins.png"
            style={{width:"11rem"}}
            alt=""
            width={1000000}
            height={1000000}
            draggable="false"
          />
        </div>
        <a href='https://beta.nlx.trade/#/stake' target='_blank' rel="noreferrer" style={{marginBottom:"2rem"}}>
              <div className="justify-center items-center mt-3 text-white bg-orange-600 rounded shadow-sm hover:bg-orange-700" 
              style={{fontSize:"0.8rem", paddingInline:"4rem", paddingBlock:"0.2rem", display:"flex", justifyContent:"center"}}>
                Stake Now
              </div>
        </a>
    </div>
        </div>
    )
}