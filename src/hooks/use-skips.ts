import { useQuery } from "@tanstack/react-query";
import type { Skip } from "../entities/Skip";
import APIClient from "../services/api-client";
import { useMemo } from "react";

const useSkips = () => {
  const apiClient = new APIClient<Skip>(
    "/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  const response = useQuery({
    queryKey: ["skips"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 1000 * 60 * 60,
  });

  const skips = useMemo(
    () =>
      response.data?.map((skip) => ({
        ...skip,
        price: skip.price_before_vat + (skip.vat / 100) * skip.price_before_vat,
        image: `${import.meta.env.VITE_PUBLIC_API_URL}/skips/skip-sizes/${
          skip.size
        }-yarder-skip.jpg`,
      })),
    [response.data]
  );

  return {
    ...response,
    data: skips,
  };
};

export default useSkips;
