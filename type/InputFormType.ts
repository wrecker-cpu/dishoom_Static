export interface FormData {
    contactReason: string;
    location: string;
    firstName: string;
    lastName: string;
    email: string;
    recommendation: string;
    message: string;
  }
  
export  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    location?:string;
    recommendation?: string;
    message?: string; // Ad
  }