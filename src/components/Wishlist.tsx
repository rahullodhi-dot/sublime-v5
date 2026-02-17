import { Heart, Plus, Minus, ShoppingCart, X } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import texture from "../assets/images/texture.png";
import tokri from '../assets/images/tokri.png';
import TeaLeaf from "../assets/images/TealLeaf.png";
import productImg1 from '../assets/images/wishlist1.png';
import productImg2 from '../assets/images/wishlist2.png';
import productImg3 from '../assets/images/wishlist3.png';
import productImg4 from '../assets/images/wishlist4.png';
import { useState } from "react";

const initialWishlist = [
  { id: 1, name: "Arabica Coffee", price: "₹499", weight: "250g", image: productImg1, badge:true },
  { id: 2, name: "Espresso Beans", price: "₹699", weight: "500g", image: productImg2, badge:true },
  { id: 3, name: "Roasted Blend", price: "₹599", weight: "200g", image: productImg3, badge:true },
  { id: 4, name: "Premium Dark", price: "₹799", weight: "1kg", image: productImg4, badge:true },
    { id: 1, name: "Arabica Coffee", price: "₹499", weight: "250g", image: productImg1, badge:true },
  { id: 2, name: "Espresso Beans", price: "₹699", weight: "500g", image: productImg2, badge:true },
  { id: 3, name: "Roasted Blend", price: "₹599", weight: "200g", image: productImg3, badge:true },
  { id: 4, name: "Premium Dark", price: "₹799", weight: "1kg", image: productImg4, badge:true },
];


const breadcrumbItems = [
  { label: "wishlist", path: `wishlist/`, isBold: true },
];

export default function WishlistPage({ showTop = true}) {
  const [cart, setCart] = useState<{[key:number]: number}>({});
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
  const [isLiked, setisLiked] = useState<boolean>(true)

  const addToCart = (id:number) => setCart(prev => ({ ...prev, [id]: 1 }));
  const increaseQty = (id:number) => setCart(prev => ({ ...prev, [id]: prev[id]+1 }));
  const decreaseQty = (id:number) => {
    setCart(prev => {
      if(prev[id] === 1){
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: prev[id]-1 };
    });
  };

  const removeFromWishlist = (id:number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#f6f1e8] min-h-screen relative">

      { showTop && (
        <div
          style={{
            backgroundImage: `url(${texture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="relative py-12"
        >
          <img src={tokri} className="absolute left-0 top-0 h-full object-cover opacity-50" />
          <img src={TeaLeaf} className="absolute right-0 bottom-0 h-40 object-cover opacity-50" />

          <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
            <h1 style={{fontFamily:"gotham2"}} className="text-3xl text-[#9a7523] font-bold mb-2">My Wishlist</h1>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
      )}

      {/* ================= Wishlist Grid ================= */}
      <div className="container max-w-[1320px] mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 sm:grid-cols-2  ${!showTop ? "lg:grid-cols-3":"lg:grid-cols-4"} gap-6`}>

          {wishlistItems.map((product) => (
            <div key={product.id} className="rounded-2xl bg-white shadow-md">
              
              {/* Image + Icons */}
              <div className="relative w-full h-[291px] rounded-t-[14px]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-[14px]" />

                {/* Remove X button (LEFT) */}
                {/* <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-16 z-[100] bg-white p-2 rounded-full shadow "
                >
                  <X className="w-5 h-5 text-black" />
                </button> */}

                {/* Heart Icon (RIGHT) */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-10">
                  <Heart onClick={()=>setisLiked((prev)=>!prev)} fill={isLiked ? "white" :"red"} className="w-5 h-5 text-red-500" />
                </button>

                {/* Bestseller Badge */}
                {product.badge && (
                  <div
                    className="absolute -top-1 z-[50] left-5 w-9 h-[130px] flex items-center justify-center bg-[#b89b4a]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 70%, 0 85%)' }}
                  >
                    <div
                      style={{
                        fontFamily: "'gotham-book', sans-serif",
                        fontWeight: 100,
                        fontSize: '12px',
                        lineHeight: '100%',
                      }}
                      className="font-light text-[8px] leading-[48px] tracking-wider capitalize text-center text-white [writing-mode:vertical-rl] rotate-180 -mt-8"
                    >
                      Bestseller
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3
                  className="text-[20px] leading-[30px] capitalize line-clamp-2 mb-2"
                  style={{ fontFamily: "'gotham-light'", fontWeight: 100 }}
                >
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span style={{fontFamily:"gotham2"}} className="text-[#9a7523] mb-2 text-sm">
                      Net Weight - {product.weight}
                    </span>
                    <span style={{fontFamily:"gotham-book"}} className="text-[22px] leading-[30px]">
                      {product.price}
                    </span>
                  </div>

                  {cart[product.id] ? (
                    <div className="flex items-center mt-4 text-xs py-1 bg-[#9a7523] text-white border rounded-lg overflow-hidden">
                      <button className="px-3 py-1" onClick={()=>decreaseQty(product.id)}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3">{cart[product.id]}</span>
                      <button className="px-3 py-1" onClick={()=>increaseQty(product.id)}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      style={{fontFamily:"gotham-book"}}
                      className="flex items-center gap-2 mt-4 bg-[#9a7523] text-white px-4 py-2 rounded-lg text-xs"
                      onClick={()=>addToCart(product.id)}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
