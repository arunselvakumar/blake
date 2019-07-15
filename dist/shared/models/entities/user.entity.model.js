"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    bio: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
});
//# sourceMappingURL=user.entity.model.js.map