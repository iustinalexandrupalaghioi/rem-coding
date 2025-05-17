export type SkipResponse = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost?: number;
  per_tonne_cost?: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: Date;
  updated_at: Date;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

export type Skip = SkipResponse & {
  price: number;
  image: string;
};
