import * as mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

export const ServiceEntitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    upTime: { type: Number },
    servicableDistance: { type: Number },
    isOffline: { type: Boolean },
    categoryId: { type: String },
    location: {
        type: pointSchema,
        required: true,
    },
});

// {
// 	"location": {
// 		"type": "Point",
// 		"coordinates": {
// 			"type": [-104.9903, 39.7392]
// 		}
// 	},
// }

export interface ServiceEntityModel extends mongoose.Document {
    name: string;
    phone: string;
    upTime: number;
    serviceableDistance: string;
    isOffline: boolean;
    categoryId: string;
    location: any;
    // {
    //     type: { type: `Point` },
    //     coordinates: number[],
    // };
}
