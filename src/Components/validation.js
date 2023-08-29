export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "password must be greater than 6 or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "passwprd is do not match";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isChecked) {
      delete errors.isChecked;
    } else {
      errors.isChecked = "Please accept our rules";
    }
  }

  return errors;
};
