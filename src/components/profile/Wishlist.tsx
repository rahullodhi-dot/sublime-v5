import React, { useState, useEffect } from 'react';
import TeaProductCard from '../TeaProductCard';
import { getWishlist, removeFromWishlistAPI, clearWishlist, formatWishlistItem } from '@/services/wishlist.service';
import type { WishlistItem } from '@/services/wishlist.service';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { 
  setWishlistItems, 
  removeFromWishlist, 
  clearWishlist as clearWishlistRedux,
  setWishlistLoading,
  setWishlistError
} from '@/redux/slices/wishlistSlice';

// Confirmation Modal Component
interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Yes',
  cancelText = 'No'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <h3 className="font-lora font-medium text-[#316763] text-xl mb-3">
          {title}
        </h3>
        <p className="font-karla font-light text-gray-700 mb-6">
          {message}
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 font-karla font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 font-karla font-medium text-white bg-[#316763] hover:bg-[#1A302A] rounded-lg transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

interface FormattedWishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  isBestseller: boolean;
  wishlistItemId: number; // Store the wishlist item ID for removal
  productDocumentId?: string; // Product documentId
}

const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const reduxLoading = useAppSelector((state: any) => state.wishlist.loading);
  const reduxError = useAppSelector((state: any) => state.wishlist.error);

  const [wishlistItems, setLocalWishlistItems] = useState<FormattedWishlistItem[]>([]);
  const [clearing, setClearing] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [localLoading, setLocalLoading] = useState(true); // Local loading for immediate feedback

  // Get Redux wishlist items to sync with local state
  const reduxWishlistItems = useAppSelector((state: any) => state.wishlist.wishlistItems);
  const reduxWishlistProductIds = useAppSelector((state: any) => state.wishlist.wishlistedProductIds);

  // Fetch wishlist data on component mount - show cached data first if available
  useEffect(() => {
    // If we have cached data in Redux, show it immediately
    if (reduxWishlistItems && reduxWishlistItems.length > 0) {
      setLocalLoading(false);
      // Still fetch fresh data in background
      fetchWishlist();
    } else {
      // No cached data, show loading and fetch
      setLocalLoading(true);
      fetchWishlist();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWishlist = async () => {
    try {
      // Set loading state in Redux and local (only if not already showing cached data)
      if (!localLoading) {
        dispatch(setWishlistLoading(true));
      }
      dispatch(setWishlistError(null));
      
      const response = await getWishlist(true);
      
      if (response.success && response.data) {
        // Map API response to Redux format
        const reduxItems = response.data.map((item: WishlistItem) => {
          const productDocId = item.product?.documentId || item.productDocumentId || '';
          return {
            id: item.id,
            documentId: item.documentId,
            productDocumentId: productDocId,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          };
        });

        // Update Redux with wishlist items
        dispatch(setWishlistItems(reduxItems));

        // Format for display
        const formattedItems: FormattedWishlistItem[] = response.data.map((item: WishlistItem) => {
          const formatted = formatWishlistItem(item);
          const productDocId = item.product?.documentId || (item as any).productDocumentId || '';
          return {
            ...formatted,
            wishlistItemId: item.id,
            productDocumentId: productDocId,
          };
        });
        setLocalWishlistItems(formattedItems);
      } else {
        dispatch(setWishlistItems([]));
        setLocalWishlistItems([]);
      }
    } catch (err: any) {
      console.error('Error fetching wishlist:', err);
      const errorMsg = err.message || 'Failed to load wishlist. Please try again.';
      dispatch(setWishlistError(errorMsg));
      dispatch(setWishlistItems([]));
      setLocalWishlistItems([]);
    } finally {
      dispatch(setWishlistLoading(false));
      setLocalLoading(false);
    }
  };

  const handleClearAll = () => {
    if (wishlistItems.length === 0) return;
    setShowClearModal(true);
  };

  const confirmClearAll = async () => {
    try {
      setClearing(true);
      await clearWishlist();
      dispatch(clearWishlistRedux());
      setLocalWishlistItems([]);
    } catch (err: any) {
      console.error('Error clearing wishlist:', err);
      alert('Failed to clear wishlist. Please try again.');
    } finally {
      setClearing(false);
    }
  };

  const handleProductClick = (product: FormattedWishlistItem) => {
    // Navigate to product detail page - handled by TeaProductCard onClick
    console.log('Product clicked:', product);
  };

  // Sync local state when Redux wishlist changes (for when items are removed via TeaProductCard heart icon)
  useEffect(() => {
    // Create a set of product IDs that are still in Redux
    const reduxProductIds = new Set(reduxWishlistProductIds);
    
    // Remove items from local state that are no longer in Redux
    setLocalWishlistItems((prevItems) => {
      const filtered = prevItems.filter((item) => 
        item.productDocumentId && reduxProductIds.has(item.productDocumentId)
      );
      return filtered;
    });
  }, [reduxWishlistProductIds]);

  // Loading state - show immediately if local loading or redux loading
  if (localLoading || reduxLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] py-8 sm:py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#316763]"></div>
        <p 
          className="font-karla font-light text-[#160B07] mt-4"
          style={{
            fontSize: '15px',
            lineHeight: '100%',
            letterSpacing: '4%',
          }}
        >
          Loading your wishlist...
        </p>
      </div>
    );
  }

  // Error state
  if (reduxError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] py-8 sm:py-12">
        <div className="text-red-500 mb-4">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 
          className="font-karla font-medium text-[#160B07] mb-3 sm:mb-4 text-center"
          style={{
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '4%',
          }}
        >
          {reduxError}
        </h2>
        <button
          onClick={fetchWishlist}
          className="bg-[#316763] hover:bg-[#1A302A] text-white font-karla font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 mt-4"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] py-8 sm:py-12">
        {/* Empty State Icon */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#316763]/10 flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#316763]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-yellow-200/50"></div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-pink-200/50"></div>
        </div>

        {/* Empty State Text */}
        <h2 
          className="font-karla font-medium text-[#160B07] mb-3 sm:mb-4 text-center"
          style={{
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '4%',
          }}
        >
          Your wishlist is empty!
        </h2>
        <p 
          className="font-karla font-light text-[#160B07] mb-6 sm:mb-8 text-center max-w-md"
          style={{
            fontSize: '15px',
            lineHeight: '100%',
            letterSpacing: '4%',
          }}
        >
          Start adding products to your wishlist to save them for later
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        onConfirm={confirmClearAll}
        title="Clear All Wishlist Items"
        message="Are you sure you want to remove all items from your wishlist? This action cannot be undone."
        confirmText="Yes, Clear All"
        cancelText="Cancel"
      />

      <div className="w-full">
        {/* Header with Clear All Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={handleClearAll}
            disabled={clearing || wishlistItems.length === 0}
            className="bg-[#316763] hover:bg-[#1A302A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-karla font-medium text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-2.5 rounded transition-all duration-300"
            style={{
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '4%',
            }}
          >
            {clearing ? 'Clearing...' : 'Clear All'}
          </button>
        </div>

        {/* Product Grid - 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-16">
          {wishlistItems.map((product) => (
            <TeaProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image || ''}
              slug={product.slug}
              documentId={product.productDocumentId}
              viewMode="grid"
              isBestseller={product.isBestseller}
              initialWishlisted={true}
              isProfileView={true}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
