function resetNeeded(passwords) {
  const needPasswordChange = [];
  const minLength = 8;
  const ruleOne = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ruleTwo = 'abcdefghijklmnopqrstuvwxyz';

  //.some method checks at least one character is included from ruleone or ruletwo in the password which is current iteration froö passwords array
  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    const hasUppercase = [...ruleOne].some((char) => password.includes(char));
    const hasLowercase = [...ruleTwo].some((char) => password.includes(char));

    if (password.length < minLength || !hasUppercase || !hasLowercase) {
      needPasswordChange.push(password);
    }
  }

  return needPasswordChange;
}