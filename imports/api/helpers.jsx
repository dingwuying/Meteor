export const isVerified = (user) => {
  // eslint-disable-next-line no-console
  console.log('helpers', user.emails);
  return user && user.emails && user.emails[0] && user.emails[0].verified;
};
