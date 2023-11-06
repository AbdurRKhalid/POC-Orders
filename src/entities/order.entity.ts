export class Order {
    customerId: string;
    products: {
        productId: string;
        amount: number;
    };
}