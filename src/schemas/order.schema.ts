import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OrderDocument = Order & Document;

@Schema({
    timestamps: { createdAt: 'created' }
})

export class Order {
    @Prop({ required: true })
    customerId: string;

    @Prop({ required: true })
    products: {
        productId: string;
        amount: number;
    }
}