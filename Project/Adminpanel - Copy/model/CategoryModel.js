const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({});

const CategoryModel = mongoose.Model("category", categorySchema);

module.exports = CategoryModel;