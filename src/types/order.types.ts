export interface IOrder {
  userId: string;
  orderDate: Date;
  totalPrice: number;
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  apartment: string;
  floor: string;
  paymentType: string;
  orderComment: string;
  orderStatus: string;
}

export interface IOrderWithId extends IOrder {
  orderId: string;
}
