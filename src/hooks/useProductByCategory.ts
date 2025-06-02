import { useEffect, useState } from "react";
import { ProductModel } from "./useProducts";

export const useProductByCategory = (catId: string) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoris = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${catId}/products`
        );
        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message || `Error: ${response.status}`);
        }

        const data = await response.json();
        const mapToProductModel: ProductModel[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price + 10,
          description: item.description,
          image: item.images?.[0],
          originalPrice: item.price,
          updatedAt: item.updatedAt,
          purcheseCount: 1,
        }));
        setProducts(mapToProductModel);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoris();
  }, []);

  return { products, loading, error };
};
