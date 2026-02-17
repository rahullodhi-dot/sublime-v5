import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';

interface Address {
  id: number;
  name: string;
  pincode: string;
  address: string;
  isSelected: boolean;
  type: string;
}

interface AddressFormData {
  name: string;
  pincode: string;
  address: string;
}

const sampleAddresses: Address[] = [
  {
    id: 1,
    name: 'Rohan Mehta',
    pincode: '422038',
    address: '24/3 Shanti Nagar, Near City Mall, Jaipur, Rajasthan',
    type: 'HOME',
    isSelected: true,
  },
  {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
    {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
    {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
    {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
    {
    id: 2,
    name: 'Priya Verma',
    pincode: '411045',
    address: 'Flat No. B-502, Green Valley Apartments, Baner Road Pune, Maharashtra',
    type: 'OFFICE',
    isSelected: false,
  },
];

const SavedAddress: React.FC = () => {
  const addressTypes = ["HOME", "OFFICE", "OTHER"];

  const [addresses, setAddresses] = useState<Address[]>(sampleAddresses);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleTypeChange = (id: number, type: string) => {
    setAddresses(prev =>
      prev.map(addr =>
        addr.id === id ? { ...addr, type } : addr
      )
    );
  };

  const handleSelectAddress = (id: number) => {
    setAddresses(prev =>
      prev.map(addr => ({
        ...addr,
        isSelected: addr.id === id
      }))
    );
  };

  const handleDelete = (id: number) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    setOpenMenuId(null);
  };

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  if (addresses.length === 0) {
    return (
      <div className="flex flex-col border items-center justify-center min-h-[400px] px-4">
        <div className="w-24 h-24 rounded-full bg-[#316763]/10 flex items-center justify-center mb-6">
          <MapPin className="w-12 h-12 text-[#316763]" />
        </div>

        <h2 className="font-medium text-[#160B07] mb-3 text-center text-lg">
          No saved addresses!
        </h2>

        <p className="text-[#160B07] mb-6 text-center text-sm">
          Add an address to make checkout faster
        </p>

        <button className="inline-flex items-center gap-2 bg-[#316763] hover:bg-[#1A302A] text-white px-6 py-3 rounded-lg transition-all">
          <Plus className="w-4 h-4" />
          Add Address
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-h-[500px] overflow-y-auto no-scrollbar p-4 sm:p-6">
      <div className="space-y-4">

        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-lg p-4 sm:p-6 border border-[#9a7523] shadow-sm 
                       flex flex-col sm:grid sm:grid-cols-[auto_1fr_auto] 
                       gap-4 relative"
          >

            {/* Top Row (Mobile) */}
            <div className="flex items-start justify-between sm:hidden">
              <button
                onClick={() => handleSelectAddress(address.id)}
                className="mt-1"
              >
                {address.isSelected ? (
                  <div className="w-6 h-6 rounded-full border-2 border-[#9a7523] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#9a7523]"></div>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                )}
              </button>

              <button
                onClick={() => toggleMenu(address.id)}
                className="p-2"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Radio */}
            <button
              onClick={() => handleSelectAddress(address.id)}
              className="hidden sm:block mt-1"
            >
              {address.isSelected ? (
                <div className="w-9 h-9 rounded-full border-2 border-[#9a7523] flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#9a7523]"></div>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300"></div>
              )}
            </button>

            {/* Address Details */}
            <div>
              <h3
                className={`font-semibold text-base sm:text-lg mb-1 ${
                  address.isSelected ? "text-[#2A2A2A]" : "text-[#898989]"
                }`}
              >
                {address.name}, {address.pincode}
              </h3>

              <p className="text-sm sm:text-base text-[#898989]">
                {address.address}
              </p>

              {/* Address Type */}
              <div className="mt-3">
                <h4 className="text-xs font-semibold mb-2 text-gray-600">
                  Address Type
                </h4>

                <div className="flex flex-wrap gap-2">
                  {addressTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleTypeChange(address.id, type)}
                      className={`px-3 py-1 rounded-full border text-xs font-medium transition-all
                        ${
                          address.type === type
                            ? "bg-[#9a7523] text-white border-[#9a7523]"
                            : "bg-white text-[#9a7523] border-[#9a7523]"
                        }
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Three Dots */}
            <div className="hidden sm:block relative justify-self-end">
              <button
                onClick={() => toggleMenu(address.id)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Dropdown */}
            {openMenuId === address.id && (
              <div className="absolute right-4 top-12 sm:top-16 z-20 bg-white rounded-lg shadow-lg border min-w-[120px]">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(address.id)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default SavedAddress;
