export class ServicesMan {
    id  :string;
    name  :  string;
    phoneNumber  :  number;
    address  :   string;
    cityId  : number;
    imagePath  :  string;
    serviceSpecialistId  : number;
    doctorTimeTable:IdoctorTimeTable;
}
 export interface IdoctorTimeTable {
  id: number,
  doctorId: number;
   doctorDay: string;
    doctorTime: string,
     doctor: string;

    }
