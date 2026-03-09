// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// // import { Autoplay } from "swiper/modules";
// import Image from "next/image";
// import GetAllGategories from "@/Actions/GetAllGategories";
// import { useEffect, useState } from "react";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";

// export default function CategorySlider() {
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       let res = await GetAllGategories();
//       setData(res);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto mt-6">
//       <Swiper
//         spaceBetween={15}
//         slidesPerView={7}
//         modules={[Autoplay, Pagination]}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2000 }}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 6 },
//           1280: { slidesPerView: 7 },
//         }}
//       >
//         {data.map((cat: any) => (
//           <SwiperSlide key={cat._id}>
//             <Image
//               src={cat.image}
//               alt={cat.name}
//               width={200}
//               height={200}
//               className="h-[120px] w-full object-cover"
//             />
//             <p className="text-center text-sm mt-2">{cat.name}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import GetAllGategories from "@/Actions/GetAllGategories";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function CategorySlider() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      let res = await GetAllGategories();
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Shop by Category
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((cat: any) => (
          <SwiperSlide key={cat._id}>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-3 cursor-pointer group">

              <div className="relative w-full h-[110px] overflow-hidden rounded-xl">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-center text-sm font-medium mt-3 group-hover:text-green-600 transition">
                {cat.name}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}