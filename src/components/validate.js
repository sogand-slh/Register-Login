export const validate = (data, type) => {
  const errors = {};

  if (!data.email.trim()) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email is invalid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "password must be 6 or more character";
  } else {
    delete errors.password;
  }

  if (type === "SignUp") {
    if (!data.name.trim()) {
      errors.name = "username required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the Password";
    } else if (data.confirmPassword !== data.password) {
      errors.password = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  return errors;
};
