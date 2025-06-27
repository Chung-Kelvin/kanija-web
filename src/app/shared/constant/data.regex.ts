export const phoneNumberRegex = /^((\+84)|0)(3|5|7|8|9)[0-9]{8}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
export const urlRegex =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
