"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
exports.ReviewSchema = new mongoose.Schema({
    serviceId: { type: String, required: true },
    userId: { type: String, required: true },
    rating: { type: Number, required: false, min: 0, max: 5 },
    content: { type: String, required: false },
    modifiedOn: { type: Date, required: true },
    isArchived: { type: String, required: true },
});
exports.ReviewSchema.plugin(mongoosePaginate);
//# sourceMappingURL=review.entity.model.js.map