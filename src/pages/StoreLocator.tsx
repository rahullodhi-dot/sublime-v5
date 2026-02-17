import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
    Tooltip,
} from "react-leaflet";
import L from "leaflet";

import marker from "../assets/images/marker.png";
import texture from "../assets/images/texture.png";
import tokri from "../assets/images/tokri.png";
import TeaLeaf from "../assets/images/TealLeaf.png";
import Breadcrumb from "../components/Breadcrumb";

const stores = [
    {
        id: 1,
        name: "Falcon Cafe",
        address:
            "1st Floor, Prestige Falcon Towers, No 19, Brunton Rd, Bengaluru, Karnataka 560025",
        lat: 12.9610758,
        lng: 77.5038124,
        phone: "+91 90358 27204",
    },
    {
        id: 2,
        name: "The Collection UB City",
        address:
            "2nd Floor, Vittal Mallya Rd, Bengaluru, Karnataka 560001",
        lat: 12.9768,
        lng: 77.5901,
        phone: "+91 84311 88100",
    },
    {
        id: 3,
        name: "The Courtyard by Sublime",
        address:
            "Prestige Trade Towers, Race Course Rd, Bengaluru- 560001",
        lat: 12.5909,
        lng: 77.3518,
        phone: "+91 97420 65136",
    },
];

const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [35, 35],
});

function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, 13);
    return null;
}

const breadcrumbItems = [{ label: "Store Locator", path: "/", isBold: true }];

const StoreLocation: React.FC = () => {
    const [activeStore, setActiveStore] = useState(stores[0]);

    return (
        <div className="w-full bg-[#f6f1e8] overflow-hidden">
            {/* ===== Header Section ===== */}
            <div
                style={{
                    backgroundImage: `url(${texture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative py-10 sm:py-14"
            >
                <img
                    src={tokri}
                    className="absolute left-0 top-0 h-full opacity-30 pointer-events-none hidden sm:block"
                />
                <img
                    src={TeaLeaf}
                    className="absolute right-0 bottom-0 h-24 sm:h-40 opacity-30 pointer-events-none"
                />

                <div className="relative container mx-auto px-4 text-center">
                    <h1
                        style={{ fontFamily: "gotham-book" }}
                        className="text-2xl sm:text-3xl text-[#9a7523] capitalize font-bold mb-3"
                    >
                        our store location
                    </h1>

                    <div className="flex justify-center">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </div>

            {/* ===== Map Section ===== */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-10">
                <div className="w-full h-[45vh] sm:h-[60vh] rounded-2xl sm:rounded-3xl border-2 border-[#9a7523] filter sepia-[50%] overflow-hidden shadow-md">
                    <MapContainer
                        center={[activeStore.lat, activeStore.lng]}
                        zoom={11}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <ChangeView center={[activeStore.lat, activeStore.lng]} />

                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {stores.map((store) => (
                            <Marker
                                key={store.id}
                                position={[store.lat, store.lng]}
                                icon={customIcon}
                                eventHandlers={{
                                    click: () => setActiveStore(store),
                                }}
                            >
                                <Tooltip
                                    permanent
                                    direction="top"
                                    offset={[0, -20]}
                                >
                                    <div className="text-center">
                                        <p className="text-xs font-semibold">
                                            {store.name}
                                        </p>
                                    </div>
                                </Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>

            {/* ===== Store Cards Section ===== */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            onClick={() => setActiveStore(store)}
                            className="relative p-5 sm:p-6 border rounded-xl cursor-pointer transition shadow-sm bg-[#F1E4B04D]"
                        >
                            {/* Icon */}
                            <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-[#9a7523] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path d="M21 0C12.285 0 5.25 7.035 5.25 15.75C5.25 26.25 21 42 21 42C21 42 36.75 26.25 36.75 15.75C36.75 7.035 29.715 0 21 0ZM21 5.25C23.7848 5.25 26.4555 6.35625 28.4246 8.32538C30.3938 10.2945 31.5 12.9652 31.5 15.75C31.5 21.5775 26.8275 26.25 21 26.25C18.2152 26.25 15.5445 25.1438 13.5754 23.1746C11.6062 21.2055 10.5 18.5348 10.5 15.75C10.5 12.9652 11.6062 10.2945 13.5754 8.32538C15.5445 6.35625 18.2152 5.25 21 5.25Z" fill="white" />
                                </svg>
                                
                            </div>

                            <div className="pt-10 sm:pt-12 text-center">
                                <h3
                                    style={{ fontFamily: "gotham2" }}
                                    className="text-lg sm:text-xl text-[#9a7523] font-semibold tracking-wide"
                                >
                                    {store.name}
                                </h3>

                                <p
                                    style={{ fontFamily: "gotham-book" }}
                                    className="text-sm text-black mt-3 leading-relaxed"
                                >
                                    {store.address}
                                </p>

                                <button className="mt-4 text-sm flex justify-center items-center gap-2 text-[#9a7523] w-full">
                                   <span className="p-2 bg-[#9a7523] blcok rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <path d="M8.01327 2.36983L7.19082 2.61759C6.45852 2.83844 5.80454 3.26388 5.30585 3.84384C4.80717 4.42381 4.48454 5.13417 4.37594 5.8913C4.03527 8.26342 4.79691 11.037 6.63335 14.2178C8.46521 17.3906 10.4817 19.4346 12.7013 20.3293C13.4145 20.6168 14.1951 20.6933 14.9506 20.55C15.706 20.4066 16.4043 20.0494 16.9626 19.5207L17.5843 18.9311C17.988 18.549 18.2393 18.0333 18.2914 17.4799C18.3435 16.9265 18.1929 16.3731 17.8676 15.9223L16.3122 13.7659C16.1019 13.4747 15.8058 13.2567 15.4654 13.1423C15.125 13.028 14.7573 13.023 14.4139 13.1281L12.0612 13.8473L12.0004 13.8588C11.7412 13.8966 11.1424 13.3357 10.3969 12.0441C9.61685 10.6929 9.45627 9.90256 9.67077 9.69839L10.8671 8.5823C11.3042 8.17418 11.6028 7.63965 11.721 7.05348C11.8393 6.46731 11.7713 5.85883 11.5267 5.31318L10.7674 3.62586C10.539 3.11811 10.1338 2.71071 9.62732 2.47962C9.12082 2.24852 8.54641 2.2095 8.01327 2.36983ZM9.72353 4.09615L10.4806 5.78348C10.6275 6.11075 10.6685 6.47577 10.5977 6.82746C10.527 7.17916 10.348 7.49994 10.086 7.74495L8.88618 8.86218C8.11765 9.58942 8.37229 10.8305 9.40465 12.6177C10.3751 14.2992 11.2606 15.1297 12.2126 14.9852L12.3549 14.9554L14.7499 14.2247C14.8644 14.1895 14.987 14.1911 15.1006 14.2291C15.2142 14.2672 15.3129 14.3398 15.3831 14.4369L16.9385 16.5934C17.1014 16.8187 17.1769 17.0955 17.1509 17.3724C17.125 17.6492 16.9994 17.9072 16.7974 18.0983L16.1746 18.6879C15.7758 19.0653 15.2771 19.3203 14.7376 19.4226C14.1982 19.5248 13.6407 19.4701 13.1314 19.2649C11.1837 18.4803 9.34271 16.614 7.62785 13.6443C5.90841 10.6677 5.21215 8.13609 5.51153 6.05418C5.58903 5.51326 5.81946 5.00575 6.1757 4.59139C6.53194 4.17703 6.99915 3.87308 7.52232 3.71533L8.34477 3.46756C8.61141 3.38744 8.89809 3.40703 9.15135 3.52269C9.40462 3.63835 9.60717 3.84217 9.72124 4.09615" fill="#F6F1E8" />
                                    </svg></span> <span className="text-lg">{store.phone}</span>
                                </button>

                                <div className="mt-4 w-full flex items-center justify-center px-3 py-2 rounded-full bg-[#9a7523]">
                                  <div className="border p-1 rounded-full bg-white mr-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="">
                                            <path d="M14 26.25C7.245 26.25 1.75 20.755 1.75 14C1.75 7.245 7.245 1.75 14 1.75C20.755 1.75 26.25 7.245 26.25 14C26.25 20.755 20.755 26.25 14 26.25ZM14 3.5C8.2075 3.5 3.5 8.2075 3.5 14C3.5 19.7925 8.2075 24.5 14 24.5C19.7925 24.5 24.5 19.7925 24.5 14C24.5 8.2075 19.7925 3.5 14 3.5Z" fill="#9A7523" />
                                            <path d="M17.5 18.375C17.3425 18.375 17.185 18.34 17.045 18.2525L12.67 15.6275C12.541 15.549 12.4346 15.4384 12.361 15.3065C12.2874 15.1747 12.2491 15.026 12.25 14.875V7.875C12.25 7.385 12.635 7 13.125 7C13.615 7 14 7.385 14 7.875V14.385L17.955 16.7475C18.1179 16.8473 18.2438 16.9976 18.3137 17.1754C18.3835 17.3533 18.3934 17.549 18.342 17.733C18.2906 17.9171 18.1805 18.0793 18.0286 18.1951C17.8766 18.311 17.6911 18.3741 17.5 18.375Z" fill="#9A7523" />
                                        </svg> </div> <button style={{fontFamily:"gotham-book"}} className="flex lg:text-lg tracking-wide text-white"> Timings: 11am to 6pm</button>
                                </div>
                                </div>
                            </div>
                        // </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreLocation;
