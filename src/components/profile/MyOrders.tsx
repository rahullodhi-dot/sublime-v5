import React from 'react';
// import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EllipsisVertical } from 'lucide-react';

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ProductImage {
  id: number;
  documentId: string;
  name: string;
  url: string;
  mime: string;
  size: number;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice: number;
  stock: number;
  sku: string;
  isActive: boolean;
  rating: number;
  image: ProductImage;
  weightAndUnit: {
    unit: string;
    weight: number;
  };
}

export interface OrderItem {
  id: number;
  documentId: string;
  quantity: number;
  price: number;
  subtotal: number;
  product: Product;
}

export interface Address {
  id: number;
  type: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  addressType: string;
}

export interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Order {
  id: number;
  documentId: string;
  orderNumber: string;
  totalAmount: number;
  subtotal: number;
  tax: number;
  shippingCost: number;
  discount: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "pending" | "paid" | "failed";
  estimatedDeliveryDate: string;
  user: User;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: string;
  updatedAt: string;
  deliveryStatus?: string;
  orderMessage?: string // Optional field for delivery status updates
}
// THIS IS MY INTERFACE FOR THE ORDER I GOING  to give the api data please create static data regarding to thiese interface 




// import { Order } from "./your-interfaces-file";

const ordersMock: Order[] = [
  {
    id: 4,
    documentId: "cp4uval2v7e95714u2hqtunb",
    orderNumber: "ORD-1770184144452-7030",
    totalAmount: 2997.3,
    subtotal: 2910,
    tax: 87.3,
    shippingCost: 0,
    discount: 0,
    status: "pending",
    paymentStatus: "pending",
    estimatedDeliveryDate: "",
    createdAt: "2026-02-04T05:49:04.515Z",
    updatedAt: "2026-02-05T09:33:18.027Z",
    deliveryStatus: "Arriving today",
    orderMessage: "Your item is out for delivery",


    user: {
      id: 10,
      documentId: "r7o9ti2han43614xkqey1zqz",
      username: "user_+919876543250",
      email: "+919876543250@phoneauth.local",
      firstName: "Test",
      lastName: "User1",
    },

    shippingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    billingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    items: [
      {
        id: 26,
        documentId: "io567en5qkjx75dx0139dp7s",
        quantity: 2,
        price: 800,
        subtotal: 1600,
        product: {
          id: 3,
          documentId: "zgtwi8kvflyyg8xz7z8fq30p",
          name: "Kashmiri Kahwa",
          slug: "kashmiri-kahwa",
          description: "Kashmiri Kahwa tea description...",
          price: 800,
          discountPrice: 0,
          stock: 90,
          sku: "KKT100G",
          isActive: true,
          rating: 5,
          weightAndUnit: { unit: "grams", weight: 100 },
          image: {
            id: 278,
            documentId: "nrf66stx0m0wn593tkpuxa05",
            name: "Kashmiri Kahwa (2).png",
            url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/Kashmiri_Kahwa_2_bebc957ee2.png",
            mime: "image/png",
            size: 575.5,
            formats: {
              large: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/large_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "large_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "large.png",
                size: 1870.51,
                width: 1000,
                height: 1000,
                sizeInBytes: 1870511,
              },
              medium: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/medium_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "medium_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "medium.png",
                size: 1116.6,
                width: 750,
                height: 750,
                sizeInBytes: 1116604,
              },
              small: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/small_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "small_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "small.png",
                size: 512.54,
                width: 500,
                height: 500,
                sizeInBytes: 512541,
              },
              thumbnail: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/thumbnail_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "thumb",
                mime: "image/png",
                name: "thumb.png",
                size: 58.31,
                width: 156,
                height: 156,
                sizeInBytes: 58306,
              },
            },
          },
        },
      },
    ],
  },

  {
    id: 4,
    documentId: "cp4uval2v7e95714u2hqtunb",
    orderNumber: "ORD-1770184144452-7030",
    totalAmount: 2997.3,
    subtotal: 2910,
    tax: 87.3,
    shippingCost: 0,
    discount: 0,
    status: "shipped",
    paymentStatus: "pending",
    estimatedDeliveryDate: "",
    createdAt: "2026-02-04T05:49:04.515Z",
    updatedAt: "2026-02-05T09:33:18.027Z",
    deliveryStatus: "Arriving tomorrow ",
    orderMessage: "Your item has been shipped",

    user: {
      id: 10,
      documentId: "r7o9ti2han43614xkqey1zqz",
      username: "user_+919876543250",
      email: "+919876543250@phoneauth.local",
      firstName: "Test",
      lastName: "User1",
    },

    shippingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    billingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    items: [
      {
        id: 26,
        documentId: "io567en5qkjx75dx0139dp7s",
        quantity: 2,
        price: 800,
        subtotal: 1600,
        product: {
          id: 3,
          documentId: "zgtwi8kvflyyg8xz7z8fq30p",
          name: "Kashmiri Kahwa",
          slug: "kashmiri-kahwa",
          description: "Kashmiri Kahwa tea description...",
          price: 800,
          discountPrice: 0,
          stock: 90,
          sku: "KKT100G",
          isActive: true,
          rating: 5,
          weightAndUnit: { unit: "grams", weight: 100 },
          image: {
            id: 278,
            documentId: "nrf66stx0m0wn593tkpuxa05",
            name: "Kashmiri Kahwa (2).png",
            url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/Kashmiri_Kahwa_2_bebc957ee2.png",
            mime: "image/png",
            size: 575.5,
            formats: {
              large: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/large_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "large_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "large.png",
                size: 1870.51,
                width: 1000,
                height: 1000,
                sizeInBytes: 1870511,
              },
              medium: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/medium_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "medium_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "medium.png",
                size: 1116.6,
                width: 750,
                height: 750,
                sizeInBytes: 1116604,
              },
              small: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/small_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "small_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "small.png",
                size: 512.54,
                width: 500,
                height: 500,
                sizeInBytes: 512541,
              },
              thumbnail: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/thumbnail_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "thumb",
                mime: "image/png",
                name: "thumb.png",
                size: 58.31,
                width: 156,
                height: 156,
                sizeInBytes: 58306,
              },
            },
          },
        },
      },
    ],
  },

  {
    id: 4,
    documentId: "cp4uval2v7e95714u2hqtunb",
    orderNumber: "ORD-1770184144452-7030",
    totalAmount: 2997.3,
    subtotal: 2910,
    tax: 87.3,
    shippingCost: 0,
    discount: 0,
    status: "delivered",
    paymentStatus: "pending",
    estimatedDeliveryDate: "",
    createdAt: "2026-02-04T05:49:04.515Z",
    updatedAt: "2026-02-05T09:33:18.027Z",
    deliveryStatus: "Delivered on May 21",

    user: {
      id: 10,
      documentId: "r7o9ti2han43614xkqey1zqz",
      username: "user_+919876543250",
      email: "+919876543250@phoneauth.local",
      firstName: "Test",
      lastName: "User1",
    },

    shippingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    billingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    items: [
      {
        id: 26,
        documentId: "io567en5qkjx75dx0139dp7s",
        quantity: 2,
        price: 800,
        subtotal: 1600,
        product: {
          id: 3,
          documentId: "zgtwi8kvflyyg8xz7z8fq30p",
          name: "Kashmiri Kahwa",
          slug: "kashmiri-kahwa",
          description: "Kashmiri Kahwa tea description...",
          price: 800,
          discountPrice: 0,
          stock: 90,
          sku: "KKT100G",
          isActive: true,
          rating: 5,
          weightAndUnit: { unit: "grams", weight: 100 },
          image: {
            id: 278,
            documentId: "nrf66stx0m0wn593tkpuxa05",
            name: "Kashmiri Kahwa (2).png",
            url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/Kashmiri_Kahwa_2_bebc957ee2.png",
            mime: "image/png",
            size: 575.5,
            formats: {
              large: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/large_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "large_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "large.png",
                size: 1870.51,
                width: 1000,
                height: 1000,
                sizeInBytes: 1870511,
              },
              medium: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/medium_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "medium_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "medium.png",
                size: 1116.6,
                width: 750,
                height: 750,
                sizeInBytes: 1116604,
              },
              small: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/small_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "small_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "small.png",
                size: 512.54,
                width: 500,
                height: 500,
                sizeInBytes: 512541,
              },
              thumbnail: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/thumbnail_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "thumb",
                mime: "image/png",
                name: "thumb.png",
                size: 58.31,
                width: 156,
                height: 156,
                sizeInBytes: 58306,
              },
            },
          },
        },
      },
    ],
  },


  {
    id: 4,
    documentId: "cp4uval2v7e95714u2hqtunb",
    orderNumber: "ORD-1770184144452-7030",
    totalAmount: 2997.3,
    subtotal: 2910,
    tax: 87.3,
    shippingCost: 0,
    discount: 0,
    status: "cancelled",
    paymentStatus: "pending",
    estimatedDeliveryDate: "",
    createdAt: "2026-02-04T05:49:04.515Z",
    updatedAt: "2026-02-05T09:33:18.027Z",
    deliveryStatus: "cancelled",
    orderMessage: "Your item is Cancelled",

    user: {
      id: 10,
      documentId: "r7o9ti2han43614xkqey1zqz",
      username: "user_+919876543250",
      email: "+919876543250@phoneauth.local",
      firstName: "Test",
      lastName: "User1",
    },

    shippingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    billingAddress: {
      id: 1,
      type: "SHIPPING",
      firstName: "Rahul",
      lastName: "Lodhi",
      address1: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+919876543250",
      addressType: "OFFICE",
    },

    items: [
      {
        id: 26,
        documentId: "io567en5qkjx75dx0139dp7s",
        quantity: 2,
        price: 800,
        subtotal: 1600,
        product: {
          id: 3,
          documentId: "zgtwi8kvflyyg8xz7z8fq30p",
          name: "Kashmiri Kahwa",
          slug: "kashmiri-kahwa",
          description: "Kashmiri Kahwa tea description...",
          price: 800,
          discountPrice: 0,
          stock: 90,
          sku: "KKT100G",
          isActive: true,
          rating: 5,
          weightAndUnit: { unit: "grams", weight: 100 },
          image: {
            id: 278,
            documentId: "nrf66stx0m0wn593tkpuxa05",
            name: "Kashmiri Kahwa (2).png",
            url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/Kashmiri_Kahwa_2_bebc957ee2.png",
            mime: "image/png",
            size: 575.5,
            formats: {
              large: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/large_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "large_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "large.png",
                size: 1870.51,
                width: 1000,
                height: 1000,
                sizeInBytes: 1870511,
              },
              medium: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/medium_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "medium_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "medium.png",
                size: 1116.6,
                width: 750,
                height: 750,
                sizeInBytes: 1116604,
              },
              small: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/small_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "small_Kashmiri_Kahwa_2_bebc957ee2",
                mime: "image/png",
                name: "small.png",
                size: 512.54,
                width: 500,
                height: 500,
                sizeInBytes: 512541,
              },
              thumbnail: {
                ext: ".png",
                url: "https://askgalorepocstogare.blob.core.windows.net/sublime-poc/uploads/thumbnail_Kashmiri_Kahwa_2_bebc957ee2.png",
                hash: "thumb",
                mime: "image/png",
                name: "thumb.png",
                size: 58.31,
                width: 156,
                height: 156,
                sizeInBytes: 58306,
              },
            },
          },
        },
      },
    ],
  },
];


const MyOrders: React.FC<{ order?: Order[] | null }> = ({ order }) => {
  const getStatusBorderColor = (status) => {
    switch (status) {
      case "delivered":
        return "border-[#316763] bg-[#326763]";
      case "pending":
        return "border-[#316763]";
      case "cancelled":
        return "border-red-500";
      default:
        return "border-[#316763]";
    }
  };


  order = ordersMock; // Using mock data for demonstration
  if (!order || order.length === 0) {
    return (
      <div className="flex flex-col items-center   gap-3 justify-center min-h-[500px] py-8 sm:py-12">
        <div className=' mr-14'>
          <svg xmlns="http://www.w3.org/2000/svg" width="308" height="218" viewBox="0 0 308 218" fill="none">
            <circle cx="290.5" cy="43.5" r="17.5" fill="#316763" fill-opacity="0.1" />
            <circle cx="99.5" cy="37.5" r="37.5" fill="#ED1C24" fill-opacity="0.1" />
            <circle cx="199.5" cy="155.5" r="62.5" fill="#FFC107" fill-opacity="0.1" />
            <rect x="126" y="29" width="161" height="161" rx="16" fill="#F1E4B0" stroke="#9A7523" stroke-width="8" />
            <rect x="0.5" y="186.5" width="114" height="7" rx="3.5" fill="#9A7523" stroke="#9A7523" />
            <rect x="49.5" y="159.5" width="65" height="7" rx="3.5" fill="#9A7523" stroke="#9A7523" />
            <rect x="93.5" y="132.5" width="21" height="7" rx="3.5" fill="#9A7523" stroke="#9A7523" />
            <path d="M182.836 24.5417V64.0454C182.836 66.4558 185.753 67.6665 187.459 65.9602L204.503 48.9167L221.546 65.9602C223.252 67.6665 226.169 66.4585 226.169 64.0454V24.5417C226.169 23.1051 225.599 21.7273 224.583 20.7115C223.567 19.6957 222.189 19.125 220.753 19.125H188.253C186.816 19.125 185.438 19.6957 184.422 20.7115C183.407 21.7273 182.836 23.1051 182.836 24.5417Z" fill="#9A7523" stroke="#9A7523" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontFamily: "gotham2" }} className=''>You have no recent orders!</h2>
        <p style={{ fontFamily: "gotham-light" }} className='text-lg'>Browse more products and find something you like</p>
        <Link style={{ fontFamily: "gotham-book" }} to="/products-lists" className=' px-12 py-3 rounded-lg bg-[#9a7523] text-white text-sm font-semibold tracking-wider '>Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-h-[500px] py-8 sm:py-2 h-[585px] overflow-y-auto no-scrollbar ">
      {/* <h2 className="text-center text-2xl mb-8">My Orders</h2> */}

      {order.map((ord) => (
        <div key={ord.documentId} className=" mx-auto  max-w-[1200px] p-2 ">


          <ul>
            {ord.items.map((item) => (
              <li
                key={item.documentId}
                className="grid grid-cols-[80px_1.6fr_1fr_1fr_40px] p-2  rounded-lg gap-6 px-2 items-center     bg-white"
              >
                {/* 1️ Image */}
                <div className="w-[80px] h-[80px] border rounded-md overflow-hidden">
                  <img
                    src={item.product.image.formats.thumbnail.url}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 2️ Name + Qty */}
                <div className="flex flex-col gap-2">
                  <p style={{ fontFamily: "gotham-book" }} className="font-semibold tracking-wider text-[16px] text-[#160B07]">
                    {item.product.name} - {item.product.weightAndUnit.weight} {item.product.weightAndUnit.unit}
                  </p>
                  <p style={{ fontFamily: "gotham-light" }} className="text-sm text-[#9A7523]">
                    Quantity - {item.quantity}
                  </p>
                </div>

                {/* 3 Price + MRP */}
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-[#160B07]">
                    ₹{item.price}
                  </p>
                  <p className="text-xs text-gray-500">
                    MRP (incl. all taxes)
                  </p>
                </div>

                {/*  Delivery Status */}
                <div className="flex flex-col justify-start   items-start gap-3">
                  <div className='flex  justify-start  items-center gap-2'>
                    <div
                      className={`w-4 h-4 rounded-full border-[3px] ${getStatusBorderColor(
                        ord.status
                      )}`}
                    />

                    <p className="text-lg text-[#160B07]">
                      {ord.deliveryStatus}
                    </p>
                  </div>
                  <p className='text-sm'> {ord.status === "delivered" ? <p className='flex  text-xs justify-center items-center'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M8.99754 12.225L6.22254 14.3438C6.08504 14.4563 5.93504 14.5095 5.77254 14.5035C5.61004 14.4975 5.46629 14.4505 5.34129 14.3625C5.21629 14.2745 5.11954 14.1558 5.05104 14.0063C4.98254 13.8568 4.97929 13.6943 5.04129 13.5188L6.11004 10.05L3.39129 8.11877C3.24129 8.01877 3.14754 7.88752 3.11004 7.72502C3.07254 7.56252 3.07879 7.41252 3.12879 7.27502C3.17879 7.13752 3.26629 7.01552 3.39129 6.90902C3.51629 6.80252 3.66629 6.74952 3.84129 6.75002H7.19755L8.28505 3.15002C8.34755 2.97502 8.44454 2.84052 8.57604 2.74652C8.70754 2.65252 8.84804 2.60577 8.99754 2.60627C9.14704 2.60677 9.2878 2.65377 9.4198 2.74727C9.5518 2.84077 9.64855 2.97502 9.71005 3.15002L10.7975 6.75002H14.1538C14.3288 6.75002 14.4788 6.80327 14.6038 6.90977C14.7288 7.01627 14.8163 7.13802 14.8663 7.27502C14.9163 7.41202 14.9225 7.56202 14.885 7.72502C14.8475 7.88802 14.7538 8.01927 14.6038 8.11877L11.885 10.05L12.9538 13.5188C13.0163 13.6938 13.0133 13.8563 12.9448 14.0063C12.8763 14.1563 12.7793 14.275 12.6538 14.3625C12.5283 14.45 12.3845 14.497 12.2225 14.5035C12.0605 14.51 11.9105 14.4568 11.7725 14.3438L8.99754 12.225Z" fill="#316763" />
                  </svg> Rate & Review your Product</p> : ord.orderMessage} </p>
                </div>

                {/*  Three dots */}
                <div className="text-right cursor-pointer text-xl">
                  <  EllipsisVertical />
                </div>
              </li>

            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default MyOrders;

