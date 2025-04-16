//Random Password Generator
function generatepassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
  const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchars = "0123456789";
  const symbolchars = "!@#$%^&*()_+-=";

  let allowedchars = "";
  let password = "";

  allowedchars += includeLowercase ? lowercasechars : "";
  allowedchars += includeUppercase ? uppercasechars : "";
  allowedchars += includeNumbers ? numberchars : "";
  allowedchars += includeSymbols ? symbolchars : "";

  if (length <= 0) {
    return `(password length must be at least)`;
  }
  if (allowedchars.length === 0) {
    return `(At least 1 set of character needs t0 be selected)`;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedchars.length);
  }
  password += allowedchars[randomIndex];

  return password;
}
const PasswordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatepassword(
  PasswordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password:${password}`);
console.log(`Generated password: ${password}`);
