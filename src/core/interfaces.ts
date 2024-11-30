// Formularios TS:

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: number | null;
}

export interface PaymentMethod {
  cardNumber: number | null;
  cardHolderName: string;
  expiryDate: string; // Format: MM/YY
  cvv: number | null;
}

export interface FormPropsData {
  userDetails: UserDetails;
  address: Address;
  paymentMethod: PaymentMethod;
}

const formData: FormPropsData = {
  userDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: null,
  },
  paymentMethod: {
    cardNumber: null,
    cardHolderName: "",
    expiryDate: "",
    cvv: null,
  },
};
