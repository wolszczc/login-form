const TEST_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = (value: string) => ({
  isValid: TEST_EMAIL.test(value),
  errorMessage: "Email is incorrect",
});

const isMinLength = (length: number) => (value: string) => ({
  isValid: value.length >= length,
  errorMessage: `Value must be longer than ${length}`,
});

export const EMAIL_RULES = [isEmail];
export const PASSWORD_RULES = [isMinLength(5)];

type rule = (
  value: string,
) => {
  isValid: boolean;
  errorMessage: string;
};

export const validator = (value: string, rules: rule[]) =>
  rules.reduce(
    (previousValue, currentValue) => {
      const {
        isValid: isValidValue,
        errorMessage: errorMessageCurrent,
      } = currentValue(value);
      const isValid = previousValue.isValid && isValidValue;
      const firstErrorMessage =
        previousValue.errorMessage.length > 0
          ? previousValue.errorMessage
          : errorMessageCurrent;

      return {
        isValid,
        errorMessage: isValid ? "" : firstErrorMessage,
      };
    },
    {
      isValid: true,
      errorMessage: "",
    },
  );
