import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, Heart, ArrowLeft } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import TestimonialsSection from "../components/TestimonialsSection";
// import NewsletterBanner from "../components/NewsletterBanner";
import texture from "../assets/images/texture.png";
import tokri from '../assets/images/tokri.png';
import TeaLeaf from "../assets/images/TealLeaf.png";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import FrequntyleBuy from "../components/FrequntyleBuy";

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "English Breakfast - 100gm",
            image: product1,
            price: 255,
            quantity: 1,
        },
        {
            id: 2,
            name: "Multiflora Honey - 250gm",
            image: product2,
            price: 255,
            quantity: 2,
        },
    ]);

    // Quantity handlers
    const increaseQty = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const breadcrumbItems = [
       
        { label: "Cart" },
    ];

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#f5f1e8] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                <Link
                    to="/products-lists"
                    className="bg-[#316763] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                    <ArrowLeft /> Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f1e8]">
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
                <img src={TeaLeaf} className="absolute right-0 bottom-0 h-72 object-cover opacity-50" />

                <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
                    <h1 style={{ fontFamily: "gotham" }} className="text-3xl font-bold mb-2 text-[#9a7523]">Cart</h1>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 py-10">
             
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}

                    <div className="lg:col-span-2 space-y-6">
                        <div style={{ fontFamily: "gotham2" }} className="flex hidden lg:block text-[#0F0F0F] justify-between px-10">
                            <div>
                                Product
                            </div>
                            <div className="-mr-[80px]">
                                Quantity
                            </div>
                            <div>
                                Subtotal
                            </div>
                        </div>
                     {cartItems.map((item) => (
  <div
    key={item.id}
    className="bg-[#f5f1e8] relative p-4 sm:p-6 rounded-lg border shadow-sm"
  >

    {/* DESKTOP VIEW */}
    <div className="hidden lg:flex justify-between w-full items-center">

      <div className="flex w-full items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-contain"
        />

        <div className="flex-1 ml-6">
          <h3 style={{ fontFamily: "gotham-book" }} className="text-lg font-medium">
            {item.name}
          </h3>

          <button
            style={{ fontFamily: "gotham-light" }}
            className="flex items-center underline gap-1 text-sm text-[#0f0f0f] mt-1"
          >
            <Heart size={16} /> Move to Wishlist
          </button>
        </div>

        {/* Quantity */}
        <div
          style={{ fontFamily: "gotham-book" }}
          className="flex items-center gap-3 rounded-md text-white text-lg bg-[#9A7523] w-fit"
        >
          <button onClick={() => decreaseQty(item.id)} className="p-2">
            <Minus size={12} />
          </button>
          <span className="mx-4">{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)} className="p-2">
            <Plus size={12} />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right flex-1">
          <p className="font-semibold text-lg">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="text-[#0F0F0F] absolute top-4 right-4"
        >
          <X size={16} />
        </button>
      </div>
    </div>

    {/* MOBILE VIEW (Amazon Style) */}
    <div className="flex lg:hidden gap-4">

      {/* Left Image */}
      <div className="w-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-24 object-contain"
        />
      </div>

      {/* Right Side Details */}
      <div className="flex flex-col flex-1 justify-between">

        <div className="relative">
               <button
            onClick={() => removeItem(item.id)}
            className="text-xs absolute -right-2 -top-2 underline text-[#0F0F0F]"
          >
              <X size={16} />
          </button>
          <h3
            style={{ fontFamily: "gotham-book" }}
            className="text-base font-medium leading-snug"
          >
            {item.name}
          </h3>

          <button
            style={{ fontFamily: "gotham-light" }}
            className="flex items-center underline gap-1 text-xs text-[#0f0f0f] mt-1"
          >
            <Heart size={14} /> Move to Wishlist
          </button>
        </div>

        {/* Price */}
        <p
          style={{ fontFamily: "gotham-book" }}
          className="text-lg font-semibold mt-2"
        >
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        {/* Quantity Controls */}
        <div
          style={{ fontFamily: "gotham-book" }}
          className="flex items-center justify-between mt-3"
        >
          <div className="flex items-center gap-3 rounded-md text-white text-sm bg-[#9A7523]">
            <button onClick={() => decreaseQty(item.id)} className="px-3 py-1">
              <Minus size={12} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)} className="px-3 py-1">
              <Plus size={12} />
            </button>
          </div>

       
        </div>
      </div>
    </div>
  </div>
))}

                    </div>

                    {/* Summary */}
                    <div className="">
                        <div style={{fontFamily:"gotham-book"}} className="bg-[#f6f1e8] border-2  border-[#9a7523]   font-medium pt-6 pb-0  px-0 rounded-lg  shadow-sm sticky top-4">
                            <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 text-center">
                                SUMMARY
                            </h2>
                              <div className="flex  text-sm justify-between border-b py-3 mb-3 px-6">
                                <span>Price ({cartItems.length} items)</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex text-sm justify-between border-b py-3 mb-3 px-6">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex text-sm justify-between   mb-6 px-6">
                                <span>Order Total Incl. Tax</span>
                                <span className="text-lg font-semibold">
                                    ₹{subtotal.toFixed(2)}
                                </span>
                            </div>

                            <button style={{fontFamily:"gotham2"}} className="w-full text-lg  bg-[#9A7523] text-white py-3 rounded-b-lg">
                                Proceed to Checkout
                            </button>
                        </div>

                        <div className="w-fit mx-auto  mt-6 ">
                            <button  style={{fontFamily:"gotham"}} className="uppercase text-lg underline">
                                continue shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <FrequntyleBuy  subHeading="ONLY BUY GOOD" heading="Frequently Bought Together" />
            {/* <NewsletterBanner /> */}
        </div>
    );
};

export default Cart;
