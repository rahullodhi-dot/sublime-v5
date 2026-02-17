import React from 'react';
import texture from '../assets/images/AboutFrame.png';
import tokri from "../assets/images/tokri.png"
import TeaLeaf from "../assets/images/TeaCup.png"
import Breadcrumb from './Breadcrumb';


interface CategoryHeroProps {
  title: string;
}

const breadcrumbItems = [
    { label: "loose-tea", path: `loose-tea/` },
  
];

const   CategoryHero: React.FC<CategoryHeroProps> = ({ title }) => {
  return (
    <div
        // style={{
        //   backgroundImage: `url(${texture})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        // }}
        className="relative py-12  w-full  flex flex-col justify-center items-center  h-64 bg-[#f6f1e8]"
      >
     <div className='w-full'>
          <img src={TeaLeaf} className="absolute -translate-y-1/2 top-[50%] 0 h-48 object-cover opacity-50" />
        <img src={TeaLeaf} className="absolute -translate-y-1/2 top-[50%]  -right-[10%] bottom-0 h-48  object-cover opacity-50" />
     </div>

        <div className="relative flex justify-center items-center   my-auto flex-col container mx-auto px-4 text-center">
          <h1 style={{fontFamily:"gotham-book"}} className="text-4xl text-[#9a7523] font-bold mb-2 tracking-wide">Loose Tea</h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
  );
};

export default CategoryHero;

