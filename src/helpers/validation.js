
export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;
  if (!email) return 'Email cannot be left blank.';
  if (!re.test(email)) return 'Enter a valid email.';
  return '';
};

export const passwordValidator = password => {
  if (!password) return 'Password cannot be left blank.';
  if (password.length < 3) return 'Password must be at least 3 characters.';
  return '';
};
