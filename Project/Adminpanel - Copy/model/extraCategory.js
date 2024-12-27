const mongoose = require("mongoose");

const extraCategorySchema = mongoose.Schema({
  CategoryId: {
    type: mongoose.Schema.type.ObjectId,
    require: true,
    ref: "Category",
  },
  subCategory: {
    type: mongoose.Schema.type.ObjectId,
    require: true,
    ref: "SubCategory",
  },
  extraCategoryName: {
    type: string,
    require: true,
  },
});

const extraCategoryModel = mongoose.model("extraCategory", extraCategorySchema);
module.exports = extraCategoryModel;
