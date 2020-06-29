import { emailRegex, phoneRegex, dateRegex } from "./constants";
import { errors } from "#/utils/constants";

const validatorFnProperties = {
  fullname: (value) => value.length <= 21,
  email: (value) => !value.length || value.match(emailRegex),
  phone: (value) => !value.length || value.match(phoneRegex),
  birthdate: (value) => !value.length || value.match(dateRegex),
  message: (value) => value.length <= 483,
};

export const validatorFn = (name, value) => {
  return validatorFnProperties[name](value);
};

export const getError = (name) => {
  return errors[name];
};
