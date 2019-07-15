"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: String, required: false },
    isArchived: { type: String, required: false },
});
//# sourceMappingURL=category.entity.model.js.map