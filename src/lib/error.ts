export const getErrorMessage = (code: number) => {
  switch (code) {
    case 1:
      return "Wrong email or password, please try again!";
    default:
      return "Something went wrong!";
  }
};
