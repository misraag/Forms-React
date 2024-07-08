import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";


export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleLostFocus: handleEmailLostFocus,
    hasError: emailHasError
  } = useInput("", (value)=> isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleLostFocus: handlePasswordLostFocus,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6))


  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError) {
      console.log("Enter valid values")
      return;
    }
    console.log("Form is submitted!, enteredValues are: ", emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailLostFocus}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && <p>Please enter a valid email.</p>}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordLostFocus}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && <p>Please enter a valid password.</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
