const validate = (inputs) => {

  const errors = {};

  const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;



  if (!emailRegex.test(inputs.email)) {
    errors.email = "Debe ser un email";
  }

  if (!inputs.email) {
    errors.email = "El email no puede estar vacio";
  }

  if (inputs.email.length > 6 && inputs.email.length > 35) {
    errors.email = "Debe tener menos de 35 caracteres";
  }

  if (!passwordRegex.test(inputs.password)) {
    errors.password = " Debe ser una contraseña";
  }

  if (!inputs.password) {
    errors.password = " El campo contraseña no debe estar vacio";
  }

  if (inputs.password.length > 6 && inputs.password.length < 35) {
    errors.email = "Debe tener menos de 35 caracteres";
  }

  return errors;
};
export default validate;
