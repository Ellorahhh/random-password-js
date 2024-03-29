function generatePassword(
  lenght,
  includeLowercase,
  includeNumbers,
  includeSymbols,
  includeUppercase
) {
  const lowecaseChars = "abcdefg";
  const uppercseChars = "ABCDFEFGH";
  const numberChars = "1234567890";
  const symbolChars = "!'^++%&/()=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowecaseChars : "";
  allowedChars += includeUppercase ? uppercseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (lenght <= 0) {
    return `(passwordlenght must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`;
  }

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeSymbols,
  includeNumbers,
  includeUppercase
);

console.log(`Generated password : ${password}`);
