import * as mongoose from 'mongoose';

export const ServiceEntitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    upTime: { type: Number },
    servicableDistance: { type: Number },
    isOffline: { type: Boolean },
    categoryId: { type: String },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
        required: true
    }
})

export interface ServiceEntityModel extends mongoose.Document {
    readonly name: string,
    readonly phone: string,
    readonly upTime: number,
    readonly serviceableDistance: string,
    readonly isOffline: boolean,
    readonly categoryId: string,
    readonly location: {
        type: { type: "Point" },
        coordinates: [number]
    }
}
