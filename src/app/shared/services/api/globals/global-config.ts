
export const BaseURL = "http://ahmedinara00-001-site1.dtempurl.com";
export const API_URL = BaseURL+'/api/Account';

export const API_URL_Yaboos = BaseURL+'/api';


export class END_POINTS {
    // yaboos  API
    public static login = API_URL_Yaboos+"/MyLogin/Login";
    public static loginwithgoogle = API_URL_Yaboos+"/MyLogin/loginwithgoogle";




    //post user
    public static users = API_URL_Yaboos+"/User";
 // get All user
    public static GetAllUser = API_URL+"/admin/getAllUser";
// update user
    public static updateUser = API_URL+"/admin/update";

           // about
   public static getAbout = API_URL_Yaboos+"/About/Get";

          // ContactUs
      public static createProblem = API_URL_Yaboos +"/ContactUs/PostPharmacy";

    // city
    public static getAllCity = API_URL_Yaboos+"/City/GetAll";


    // Category / /api/Category/GetAll
    public static CategoryGetAll = API_URL_Yaboos+"/Category/GetAll";

    public static productsById = API_URL_Yaboos+"/Product/getById";
    public static Announcement = API_URL_Yaboos+"/Announcement/GetAll";
    public static Image = API_URL_Yaboos+"/Image/GetAll";
    public static GetAllHot = API_URL_Yaboos+"/Product/GetAllHot";
    public static Carts = API_URL_Yaboos+"/Carts";
    public static Service = API_URL_Yaboos+"/Service/GetAll";




    ///api/Notification/GetAll
    public static NotificationGetAll = API_URL_Yaboos+"/Notification/GetAll";
;

    //Product
    public static ProductGetAll = API_URL_Yaboos+"/Product/GetAll";



    public static passwordreset = API_URL+"/passwordreset";
    public static notification  = API_URL_Yaboos+"/Notifications/GetAll";



    ///api/Supplier/admin/create
    public static SupplierGetAll = API_URL_Yaboos + "/Supplier/GetAll";




    // cart

    public static Cart = API_URL_Yaboos + '/Carts';
    public static getCart = API_URL_Yaboos + '/Cart/GetByUser';
    public static deleteCart = API_URL_Yaboos + '/Cart/Delete';



    public static postorder = API_URL_Yaboos + '/Orders/PostOrderOrderDitales';

    public static deleteOrder = API_URL_Yaboos + '/Orders/DeleteCart';




    //pharma/api/Pharmacy/GetAll
    public static Pharmacycreate = API_URL_Yaboos + '/Pharmacy/PostPharmacy';

        //image
        public static ImageGetAll = API_URL_Yaboos + "/Image/GetAll";

        public static DoctorSpeicaalist = API_URL_Yaboos + "/DoctorSpecialist/GetAll";
        public static AllDoctor = API_URL_Yaboos + "/Doctor/GetAll";
        public static ServiceSpecialist = API_URL_Yaboos + "/ServiceSpecialist/GetAll";


}


