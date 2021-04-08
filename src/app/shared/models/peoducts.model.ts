export class Products {

    id: number;;
    name: string;
    imagePath: string;
    price:number  ;
    categoryName: string;
    supplierName: string;
    categoryId: number;
    supplierId: number;
    order: number;
    fileExtension: string;
    imageBase64: string;
    oldPrice:string;
    description:string;
    productGalleries: IproductGalleries[]

}
export interface IproductGalleries {
    imagePath: string;
  product: number;
  productId: number;


}
