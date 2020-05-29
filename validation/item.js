const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.department = !isEmpty(data.department) ? data.department : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Author field is required";
  }

  if (Validator.isEmpty(data.department)) {
    errors.department = "Department field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  if(isNaN(data.price)== true) {
    errors.price = "Price field is NaN";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};