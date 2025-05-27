import { useEffect, useState } from "react";

export type ProductModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  originalPrice: number;
  priceType: string;
  purcheseCount: number;
};

export const useProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoris = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
          category: item.category,
          image: item.image,
          rating: {
            rate: item.rating.rate,
            count: item.rating.count,
          },
          originalPrice: item.price,
          priceType: "regular",
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
