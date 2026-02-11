import React from 'react'
import Breadcrumb from './Breadcrumb'
import texture from "../assets/images/texture.png";


interface Bread{
    label:string,
    path:string
}


interface TopSectionProps{
    breadCrumnb:Array<Bread>
    title:string
}





const TopSection = ({breadCrumnb,title}:TopSectionProps) => {
  return (
   <div
          style={{
            backgroundImage: `url(${texture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="relative py-12"
        >
       

          <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
            <h1 style={{fontFamily:"gotham2"}} className="text-3xl text-[#9a7523] font-bold mb-2">{title}</h1>
            <Breadcrumb items={breadCrumnb} />
          </div>
        </div>
  )
}

export default TopSection
