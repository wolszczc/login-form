import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { validator, EMAIL_RULES, PASSWORD_RULES } from "../../lib/validator";
import { createContainer } from "unstated-next";

const SForm = styled("form")({ minWidth: 300 });
const SButton = styled(Button)({ marginTop: 20 });

const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
  event: React.ChangeEvent<HTMLInputElement>,
) => setter(event.target.value);

const useValidator = () => {
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => setIsValid(emailError && passwordError), [
    emailError,
    passwordError,
  ]);

  return {
    isValid,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  };
};

const useForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = handleChange(setEmail);
  const changePassword = handleChange(setPassword);

  return { email, password, changeEmail, changePassword };
};

const {
  useContainer: useFormContainer,
  Provider: FormProvider,
} = createContainer(useForm);
const {
  useContainer: useValidationContainer,
  Provider: ValidationProvider,
} = createContainer(useValidator);

const InputEmail: React.FC = () => {
  const { email, changeEmail } = useFormContainer();
  const { setEmailError } = useValidationContainer();

  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validEmail = validator(event.target.value, EMAIL_RULES);
    setErrorMessage(validEmail.errorMessage);
    setIsValid(validEmail.isValid);
    setEmailError(validEmail.isValid);
    changeEmail(event);
  };

  return (
    <FormControl fullWidth>
      <TextField
        error={!isValid}
        helperText={errorMessage}
        id="email"
        label="E-mail"
        value={email}
        onChange={onChange}
      />
    </FormControl>
  );
};

const InputPassword: React.FC = () => {
  const { changePassword, password } = useFormContainer();
  const { setPasswordError } = useValidationContainer();

  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validPassword = validator(event.target.value, PASSWORD_RULES);
    setErrorMessage(validPassword.errorMessage);
    setIsValid(validPassword.isValid);
    setPasswordError(validPassword.isValid);
    changePassword(event);
  };

  return (
    <FormControl fullWidth>
      <TextField
        error={!isValid}
        helperText={errorMessage}
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={onChange}
      />
    </FormControl>
  );
};

const ButtonSubmit: React.FC = () => {
  const { email, password } = useFormContainer();
  const { isValid } = useValidationContainer();
  const handleClick = () => {
    console.log(email, password);
  };
  return (
    <SButton
      disabled={!isValid}
      onClick={handleClick}
      variant="contained"
      color="secondary"
    >
      Login
    </SButton>
  );
};

const Form: React.FC = () => {
  return (
    <SForm>
      <InputEmail />
      <InputPassword />
      <ButtonSubmit />
    </SForm>
  );
};

const WrappedForm: React.FC = () => (
  <FormProvider>
    <ValidationProvider>
      <Form />
    </ValidationProvider>
  </FormProvider>
);

export default WrappedForm;
