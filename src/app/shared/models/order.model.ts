export class Order {

         customerName :  string ;
         phoneNumber :  string ;
         address :  string ;
         orderdeitalsdto:Icart;
         vat:0;
         subtotale: number;


}


export interface Icart {
     image   :    string   ;
     price   : number;
     productID   : number;
     productName   :    number   ;
     qty   : number

}
