import userResponse from './user.const';

export const userService = {
  get: () => {
    return new Promise((resolve, reject) => {
      let user = {
        firstName: userResponse.firstName,
        lastName: userResponse.lastName,
        email: userResponse.email,
        avatar: userResponse.avatar,
      };
      resolve(user);
    });
  },
};
