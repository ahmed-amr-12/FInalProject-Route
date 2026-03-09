// "use client";

// import Image from "next/image";
// import img1 from "../../../../public/img/8f9ee8f41cc2d72369a71134d471b443.jpg";
// import img2 from "../../../../public/img/a254ab3176f62d952a39db1c7a2a6a2b.jpg";
// import img3 from "../../../../public/img/56279cf36064fa5f80f43268aff774c8.jpg";
// import img4 from "../../../../public/img/ba18c6554999efb66aa1386b7179a207.jpg";
// import MySlider from "../My-Slider/MySlider";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function MainSlider() {
//   const sliderImages = [img1, img2, img3];

//   return (
//     <div className="container w-[90%] mx-auto">
//       <div className="flex gap-2">
//         <div className="w-3/4">
//           <MySlider imglist={sliderImages} />
//         </div>

//         <div className="w-1/4 flex flex-col gap-2">
//           <Image
//             src={img3}
//             className="h-[150px] w-full object-cover"
//             alt="Slider Image 3"
//           />
//           <Image
//             src={img4}
//             className="h-[150px] w-full object-cover"
//             alt="Slider Image 4"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import img1 from "../../../../public/img/8f9ee8f41cc2d72369a71134d471b443.jpg";
import img2 from "../../../../public/img/a254ab3176f62d952a39db1c7a2a6a2b.jpg";
import img3 from "../../../../public/img/56279cf36064fa5f80f43268aff774c8.jpg";
import img4 from "../../../../public/img/ba18c6554999efb66aa1386b7179a207.jpg";
import MySlider from "../My-Slider/MySlider";

export default function MainSlider() {
  const sliderImages = [img1, img2, img3];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Main Slider */}
        <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-md">
          <MySlider imglist={sliderImages} />
        </div>

        {/* Side Images */}
        <div className="flex md:flex-col gap-4">
          <div className="relative w-full h-[160px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image
              src={img3}
              alt="Slider Image 3"
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="relative w-full h-[160px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <Image
              src={img4}
              alt="Slider Image 4"
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
}