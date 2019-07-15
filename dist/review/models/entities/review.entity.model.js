"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ReviewSchema = new mongoose.Schema({
    serviceId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true, minlength: 10, maxlength: 140 },
    modifiedOn: { type: Date, required: true },
    isArchived: { type: String, required: true },
});
//# sourceMappingURL=review.entity.model.js.map