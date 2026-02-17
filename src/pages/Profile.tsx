import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getCurrentUser } from '@/services/auth.service';
import ProfileSidebar from '../components/ProfileSidebar';
import MyOrders from '../components/profile/MyOrders';
// import Wishlist from '@/components/profile/Wishlist';
import SavedAddress from '../components/profile/SavedAddress';
import HelpSupport from '../components/profile/HelpSupport';
import { div } from 'three/tsl';
import { Plus } from 'lucide-react';
import WishlistPage from '../components/Wishlist';
// import Wishlist from '../components/W9s';
// import { getCartItem, mapCartItems } from '@/utils/addTocart';
// import { setCart, type cartItems } from '@/redux/slices/CartSlice';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { setOrder } from '@/redux/slices/orderSlice';

type ProfileSection = 'orders' | 'wishlist' | 'address' | 'support';
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const Profile: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ProfileSection>('orders');
  // const user = getCurrentUser();
  const navigate = useNavigate();

  const order = [];
  // const dispatch = useAppDispatch();
  // const {order}=useAppSelector((state)=>state.myOrders);


  // If user is not logged in, redirect to login
  // React.useEffect(() => {
  //   if (!user) {
  //     navigate('/login');
  //   }
  // }, [user, navigate]);

  // if (!user) {
  //   return null;
  // }


  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return <div>
           <MyOrders order={order} />
             <button className='flex gap-2 mt-3 text-[16px] tracking-wider mx-auto border px-5 py-2 rounded-lg bg-[#9a7523] text-white justify-center items-center'>
           <span>Show More Orders </span>
          </button>
        </div>;
      // case 'wishlist':
      //   return <Wishlist />;
      case 'address':
        return <div className=''>
          <SavedAddress />
          <button className='flex gap-2 mt-3 text-[16px] tracking-wider mx-auto border px-5 py-2 rounded-lg bg-[#9a7523] text-white justify-center items-center'>
            <Plus className='h-5 w-5' /> <span>Add New Address</span>
          </button>

        </div>
      case 'support':
        return <HelpSupport />;
      case 'wishlist':
        return <div className='max-h-[500px] overflow-y-auto no-scrollbar'>
          <WishlistPage showTop = {false}/>
         
        </div>;
      default:
        return <MyOrders order={order} />;
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('jwt');
  //   if (!token) return;
  //   const fetMyorderders = async () => {
  //     try {
  //       const myOrderResponse = await fetch(`${STRAPI_URL}/api/orders/my-orders?page=1&pageSize=10`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           "Authorization": `Bearer ${token}`,
  //         },
  //         credentials: 'include',
  //       });

  //       if(!myOrderResponse.ok){
  //         throw new Error("Failed to fetch my orders");

  //       }
  //       const json = await myOrderResponse.json();
  //       if(!json.data ||json.success===false  )return;
  //       dispatch(setOrder(json.data));

  //     } catch (error) {
  //       console.error("Error fetching cart items in profile page:", error);
  //     }
  //   };
  //   fetMyorderders();
  // }, []);

  return (
    <div className="min-h-screen bg-[#fff] py-6 sm:py-8 lg:py-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-2">
          {/* Sidebar - Left (4 columns) */}
          <div className="col-span-1 lg:col-span-4">
            <ProfileSidebar
              user={null}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>

          {/* Main Content - Right (8 columns) */}
          <div className="col-span-1 lg:col-span-8">
            <div
              className="bg-[#F6F1E8]  rounded-lg p-2 w-full h-full"
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

