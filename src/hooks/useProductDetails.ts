import { useEffect, useState } from "react";
import { ProductModel } from "./useProducts";

export type ProductDetails = Omit<ProductModel, "image"> & {
  images: string[];
};

export const useProductDetails = (productId: number) => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);

    const getDetails = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        )
          .then(async (response) => {
            if (!response.ok) {
              const errorBody = await response.json();
              throw new Error(errorBody.message || `Error: ${response.status}`);
            }
            return response.json();
          })
          .then((item) => {
            const product: ProductDetails = {
              id: item.id,
              title: item.title,
              slug: item.slug,
              price: item.price + 10,
              description: item.description,
              images: item.images,
              originalPrice: item.price,
              updatedAt: item.updatedAt,
              purcheseCount: 1,
            };
            setProductDetails(product);
          });
      } catch (e: any) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    getDetails();
  }, []);
  return { productDetails, loading, error };
};
