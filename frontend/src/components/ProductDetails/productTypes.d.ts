export interface ProductDetail {
  label: string;
  value: string;
}
export interface ProductImg{
   img : string;
}
export interface ProductData {
  details: ProductDetail[];
  image : ProductImg[];
  description: string;
}
