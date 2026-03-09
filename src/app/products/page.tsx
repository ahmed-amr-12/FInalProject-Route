
// import getAllProducts from "@/Actions/gatProducts";
// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";
// import AddToCartBtn from "./AddToCartBtn";
// import WishlistBtn from './../wishlistBtn/wishlistBtn';

// export default async function Products() {
//   const products = await getAllProducts();

//   return (
//     <>
//       <h1 className="font-bold text-center p-5 mt-6 text-2xl">
//         Product Page
//       </h1>

//       <div className="container my-5 mx-auto md:w-[80%]">
//         <div className="flex flex-wrap gap-5 justify-center">
//           {products.map((product: any) => (
//             <Card
//               key={product._id}
//               className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3 shadow-md hover:shadow-lg transition"
//             >
//               <WishlistBtn productId={product._id} />

//               <Link href={`/products/${product._id}`}>
//                 <Card className="p-3 cursor-pointer hover:scale-[1.02] transition">
//                   <CardHeader>
//                     <CardTitle>
//                       <img
//                         src={product.imageCover}
//                         alt={product.title}
//                         className="w-full h-40 object-contain"
//                       />
//                     </CardTitle>

//                     <CardDescription>
//                       {product.category?.name}
//                     </CardDescription>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="font-bold line-clamp-1">
//                       {product.title}
//                     </p>
//                   </CardContent>

//                   <CardFooter>
//                     <div className="flex justify-between w-full items-center">
//                       <h5 className="font-semibold">
//                         {product.price} EGP
//                       </h5>

//                       <p className="flex items-center gap-1 text-sm">
//                         <i className="fa-solid fa-star text-yellow-400"></i>
//                         {product.ratingsAverage}
//                       </p>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </Link>

//               <div className="mt-3">
//                 <AddToCartBtn productId={product._id} />
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import getAllProducts from "@/Actions/gatProducts";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import WishlistBtn from "../wishlistBtn/wishlistBtn";

export default async function Products() {
  const products = await getAllProducts();

  return (
    <>
      <h1 className="font-bold text-center mt-10 mb-8 text-3xl">
        Our Products
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product: any) => (
            <Card
              key={product._id}
              className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <WishlistBtn productId={product._id} />

              <Link href={`/products/${product._id}`}>
                <CardHeader className="p-4">
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-44 object-contain group-hover:scale-105 transition"
                  />
                </CardHeader>

                <CardContent className="px-4 pb-2 space-y-2">
                  <p className="text-xs text-gray-500 uppercase">
                    {product.category?.name}
                  </p>

                  <p className="font-semibold text-sm line-clamp-2 min-h-[40px]">
                    {product.title}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center px-4 pb-4">
                  <h5 className="font-bold text-green-600">
                    {product.price} EGP
                  </h5>

                  <p className="flex items-center gap-1 text-sm">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    {product.ratingsAverage}
                  </p>
                </CardFooter>
              </Link>

              <div className="px-4 pb-4">
                <AddToCartBtn productId={product._id} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}