"use server";

import axios from "axios";
import { GetMyToken } from "@/Actions/GetMyToken";

const baseURL = "https://ecommerce.routemisr.com/api/v1/wishlist";

export async function getWishlist() {
  const token = await GetMyToken();

  const { data } = await axios.get(baseURL, {
    headers: { token: token as string },
  });

  return data;
}

export async function addToWishlist(productId: string) {
  const token = await GetMyToken();

  const { data } = await axios.post(
    baseURL,
    { productId },
    { headers: { token: token as string } }
  );

  return data;
}

export async function removeFromWishlist(productId: string) {
  const token = await GetMyToken();

  const { data } = await axios.delete(
    `${baseURL}/${productId}`,
    {
      headers: { token: token as string },
    }
  );

  return data;
}