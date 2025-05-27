import { useEffect, useState } from "react";

export type CategoryModel = {
  id: string;
  title: string;
  children: Array<CategoryModel>;
};

export const useCategory = () => {
  const [categoris, setCategoris] = useState<CategoryModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoris = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message || `Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched categories:", data);
        const mappedCategories: CategoryModel[] = data.map((item: any) => ({
          id: item,
          title: item,
          children: [],
        }));
        setCategoris(mappedCategories);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoris();
  }, []);

  return { categoris, loading, error };
};
