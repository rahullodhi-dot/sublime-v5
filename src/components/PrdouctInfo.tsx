import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
// import type { viewProduct } from '../redux/slices/viewProductsSlice';
// import { addToCart } from '@/utils/addTocart';

interface ProductInfoProps {
  product: viewProduct;
}


const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [pincode, setPincode] = useState('');

  console.log(product)
  // ---- Derived values (UI needs) ----
  const rating =
    product.reviews.length > 0
      ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
      product.reviews.length
      : 4.5;

  const reviewCount = product.reviews.length;

  return (
    <div className="flex flex-col gap-5 lg:gap-6 mt-4">
      {/* Product Title */}
      <div>
        <h1
          className="mb-1 text-[#9A7523]"
          style={{
            fontFamily: "'gotham-book'",
            fontWeight: 800,
            fontSize: '32px',
            lineHeight: '100%',

          }}
        >
          {product.name}
        </h1>
        <p style={{ fontFamily: "gotham-light", fontSize: "13px" }} className='text-[#000] font-bold '>Net Weight - 100g</p>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <p className="text-xs">MRP (Incl Of All Taxes)</p>
        <span style={{ fontFamily: "gotham-book" }} className=" text-[32px] text-[#9A7522]">
          ₹{product.price}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "gotham-book" }} className="text-[14px] text-[#000] leading-[25px]">
        {product.description}
        <span className="font-semibold text-[#9a7523] ml-1 cursor-pointer">
          Read More
        </span>
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            // <Star
            //   key={i}
            //   className={`w-5 h-5 ${
            //     i < Math.floor(rating)
            //       ? 'fill-[#FFC107] text-[#FFC107]'
            //       : 'text-gray-300'
            //   }`}
            // />

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <g clip-path="url(#clip0_729_1621)">
                <path d="M13.1191 5.7301L13.3535 6.23792L13.9102 6.30432L19.0039 6.90784L15.2383 10.3912L14.8271 10.7711L14.9365 11.3199L15.9355 16.3512L11.46 13.8463L10.9717 13.5729L10.4824 13.8463L6.00586 16.3512L7.00586 11.3199L7.11523 10.7711L6.7041 10.3912L2.93848 6.90784L8.0332 6.30432L8.58887 6.23792L8.82324 5.7301L10.9707 1.0719L13.1191 5.7301Z"
                  fill={`${i < 4 ? "#9A7523" : "#f6f1e8"}`} stroke="#9A7522" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_729_1621">
                  <rect width="27.278" height="27.278" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <span className="text-sm text-[#9a7523]">
          <span className='text-black'> {reviewCount < 10 ? 50 : reviewCount}</span> Reviews
        </span>
      </div>

      {/* SKU */}
      <p className="text-xs text-gray-400">SKU - {product.documentId || 'EBT100G'}</p>

      <div className='bg-[#d6c27a] px-4 py-2 rounded-lg'>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between   '>
            <div className='flex justify-center  gap-1 items-center'>
              <div className='h-6 w-6 border bg-white'></div>
              <button style={{ fontFamily: "gotham-book" }} className='text-[16px] font-bold uppercase '>subcribe & save</button>
            </div>
            <p style={{ fontFamily: "gotham-book" }} className='text-sm '>₹ 300</p>
          </div>
          <p style={{ fontFamily: "gotham-book" }} className='text-[16px] leading-[23px]    mx-auto '>
            Save Up to ₹300 per delivery! Get unique new
            varieties sent straight from eco-friendly farms and FREE shipping! Easily pause or cancel anytime.

          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col  sm:flex-row gap-3">
        <button style={{ fontFamily: "gotham-book" }} onClick={() => addToCart({ productId: product.documentId, quantity: 1 })} className="flex-1 bg-[#9a7523] text-white py-2 text-[16px] rounded-lg flex items-center justify-center gap-2">

          ADD TO BAG  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M1.44701 9.72421C1.92748 7.31916 2.16817 6.11842 2.9618 5.34358C3.10847 5.20082 3.26712 5.0709 3.43601 4.95526C4.35132 4.32894 5.57711 4.32895 8.02869 4.32895H9.55243C12.0031 4.32895 13.228 4.32894 14.1424 4.95526C14.3124 5.07217 14.4705 5.20191 14.6166 5.34447C15.4103 6.11842 15.6519 7.32005 16.1323 9.72421C16.8222 13.1743 17.1675 14.8994 16.373 16.1216C16.2293 16.3441 16.0622 16.5478 15.872 16.7327C14.8287 17.75 13.0705 17.75 9.55243 17.75H8.02869C4.50969 17.75 2.75064 17.75 1.70738 16.7318C1.51863 16.5472 1.35089 16.3422 1.20722 16.1207C0.412692 14.8985 0.75806 13.1734 1.4488 9.72332L1.44701 9.72421Z" fill="white" stroke="white" stroke-width="1.5" />
            <path d="M11.4729 7.90786C11.967 7.90786 12.3676 7.50727 12.3676 7.01312C12.3676 6.51897 11.967 6.11839 11.4729 6.11839C10.9787 6.11839 10.5781 6.51897 10.5781 7.01312C10.5781 7.50727 10.9787 7.90786 11.4729 7.90786Z" fill="black" />
            <path d="M6.10567 7.90786C6.59982 7.90786 7.00041 7.50727 7.00041 7.01312C7.00041 6.51897 6.59982 6.11839 6.10567 6.11839C5.61152 6.11839 5.21094 6.51897 5.21094 7.01312C5.21094 7.50727 5.61152 7.90786 6.10567 7.90786Z" fill="black" />
            <path d="M6.10547 4.32895V3.43421C6.10547 2.72231 6.38827 2.03957 6.89166 1.53619C7.39504 1.0328 8.07778 0.75 8.78968 0.75C9.50158 0.75 10.1843 1.0328 10.6877 1.53619C11.1911 2.03957 11.4739 2.72231 11.4739 3.43421V4.32895" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <button style={{ fontFamily: "gotham-book" }} className="flex-1 bg-[#f6f1e8] text-[16px] text-[#9a7523] border border-[#9a7523] py-2 rounded-lg">
          BUY NOW
        </button>
      </div>
      <p style={{ fontFamily: "gotham-book" }} className='text-xs '>Continue Shopping</p>

      {/* Delivery */}
      <div className="flex flex-col gap-3 w-[80%]  ">

        <div className="flex flex-wrap gap-3 justify-start items-center">
          <p className="text-sm font-medium uppercase">Estimated Delivery</p>
          <div className='relative  flex gap-3 '>
            <svg className='absolute top-[50%] left-1 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_729_1636)">
                <path d="M6.9974 6.70829C6.61062 6.70829 6.23969 6.55465 5.9662 6.28116C5.69271 6.00767 5.53906 5.63673 5.53906 5.24996C5.53906 4.86319 5.69271 4.49225 5.9662 4.21876C6.23969 3.94527 6.61062 3.79163 6.9974 3.79163C7.38417 3.79163 7.7551 3.94527 8.02859 4.21876C8.30208 4.49225 8.45573 4.86319 8.45573 5.24996C8.45573 5.44147 8.41801 5.63111 8.34472 5.80804C8.27143 5.98497 8.16401 6.14574 8.02859 6.28116C7.89317 6.41658 7.73241 6.524 7.55548 6.59728C7.37854 6.67057 7.18891 6.70829 6.9974 6.70829ZM6.9974 1.16663C5.91443 1.16663 4.87582 1.59683 4.11004 2.36261C3.34427 3.12838 2.91406 4.16699 2.91406 5.24996C2.91406 8.31246 6.9974 12.8333 6.9974 12.8333C6.9974 12.8333 11.0807 8.31246 11.0807 5.24996C11.0807 4.16699 10.6505 3.12838 9.88475 2.36261C9.11897 1.59683 8.08036 1.16663 6.9974 1.16663Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_729_1636">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input

              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Delivery Pincode"
              className="flex-1 border-0 border-b-2 placeholder-black text-center rounded-lg border-[#9a7523] bg-[#d6c27a] px-2 py-2 font-bold text-xs placeholder:font-medium focus:outline-none focus:border-[#9a7523]"
            />

               <button className="bg-[#000] text-sm py-2  text-white px-6 rounded-lg">
            Check
          </button>
          </div>

       
        </div>
        <div className='border-b border-[#9a7523]'>
          <p className='flex justify-start items-center gap-4 mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_729_1629)">
              <path d="M10.668 10.6667V2H0.667969V10.6667H10.668ZM10.668 10.6667H15.3346V7.33333L13.3346 5.33333H10.668L10.668 10.6667ZM5.33464 12.3333C5.33464 13.2538 4.58844 14 3.66797 14C2.74749 14 2.0013 13.2538 2.0013 12.3333C2.0013 11.4129 2.74749 10.6667 3.66797 10.6667C4.58844 10.6667 5.33464 11.4129 5.33464 12.3333ZM14.0013 12.3333C14.0013 13.2538 13.2551 14 12.3346 14C11.4142 14 10.668 13.2538 10.668 12.3333C10.668 11.4129 11.4142 10.6667 12.3346 10.6667C13.2551 10.6667 14.0013 11.4129 14.0013 12.3333Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_729_1629">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg> <span className='text-sm font-gotham-light'>Delivery  Within 4-7 business days to 462026.</span></p>
        </div>
      </div>

      {/* Highlights */}
      <div style={{ fontFamily: 'gotham-book' }} className='flex gap-4 items-start justify-start'>

        <p className="text-sm font-medium uppercase">Highlights</p>
        <p style={{ fontFamily: "gotham-light" }} className="text-[13px] leading-[23px]">
          Vacuum-Packed And Sealed In An Attractive Tin Caddie, No Added
          Sweeteners Or Preservatives And Can Be Stored In A Cool And Dry Place
          For Up To 18 Months.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
