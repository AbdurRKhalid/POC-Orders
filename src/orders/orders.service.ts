import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddOrderDto } from "src/dto/add-order.dto";
import { Order, OrderDocument } from "src/schemas/order.schema";

@Injectable()

export class OrderService {
    constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>) {}

    addOrder(addOrderDto: AddOrderDto): Promise<OrderDocument> {
        const order = new this.orderModel(addOrderDto);
        return order.save();
    }

    findOrders(): Promise<OrderDocument[]> {
        return this.orderModel.find();
    }
}