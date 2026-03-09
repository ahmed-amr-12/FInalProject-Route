


import React from "react";
import Image from "next/image";
import { getUserOrder } from "./order.action";

export default async function OrdersPage() {
  const res = await getUserOrder();
  const orders = res?.data || [];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          My Orders
        </h1>

        {orders.length === 0 && (
          <p className="text-gray-500 text-center">No Orders Found</p>
        )}

        {orders.map((order: any) => (
          <div
            key={order._id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 mb-10"
          >
            <div className="px-8 py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b bg-gray-50">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="text-lg font-bold text-gray-900">
                  {order._id}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Placed On</p>
                <p className="font-semibold text-gray-800">
                  {order.createdAt
                    ? new Date(order.createdAt).toDateString()
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Status</p>
                <div className="flex gap-3">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold ${
                      order.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Unpaid"}
                  </span>

                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold ${
                      order.isDelivered
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.isDelivered ? "Delivered" : "Processing"}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 py-8 border-b">
              <h2 className="text-lg font-semibold text-gray-700 mb-6">
                Items
              </h2>

              {order.cartItems?.length > 0 ? (
                order.cartItems.map((item: any) => (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-6 mb-4"
                  >
                    {item.product?.imageCover && (
                      <Image
                        src={item.product.imageCover}
                        alt={item.product.title}
                        width={100}
                        height={100}
                        className="rounded-xl object-contain"
                      />
                    )}

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-semibold text-gray-800">
                        {item.product?.title || "Product Removed"}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {item.count}
                      </p>
                    </div>

                    <div className="text-xl font-bold text-gray-900">
                      {item.price} EGP
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No items in this order</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-8 py-8 bg-gray-50">
              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h3 className="font-semibold text-gray-700 mb-5">
                  Payment Summary
                </h3>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span>{order.paymentMethodType || "-"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{order.shippingPrice || 0} EGP</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>{order.taxPrice || 0} EGP</span>
                  </div>

                  <div className="flex justify-between pt-4 mt-4 border-t font-bold text-gray-900 text-lg">
                    <span>Total</span>
                    <span>{order.totalOrderPrice || 0} EGP</span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              {order.shippingAddress && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h3 className="font-semibold text-gray-700 mb-5">
                    Shipping Address
                  </h3>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p>{order.shippingAddress.details}</p>
                    <p>Phone: {order.shippingAddress.phone}</p>
                    <p>City: {order.shippingAddress.city}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}