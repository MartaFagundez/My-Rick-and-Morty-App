// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexOneNum = /\d/;

export default function validation(inputs) {
  const errors = {};

  if(!inputs.username) errors.username = "Debes ingresar un email"
  if(!regexEmail.test(inputs.username)) errors.username = "Debes ingresar un email válido";
  if(inputs.username.length > 35) errors.password = "El email no puede tener más de 35 caracteres";

  if(!inputs.password) errors.password = "Debes ingresar tu contraseña"
  if(!regexOneNum.test(inputs.password)) errors.password = "La contraseña debe tener al menos 1 número";
  if(inputs.password.length < 6 || inputs.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres";

  return errors;
}