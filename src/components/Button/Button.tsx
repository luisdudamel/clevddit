import "./Button.scss";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
}

const Button = ({ text, type, disabled }: ButtonProps): JSX.Element => {
  return (
    <button className="login-register-button" disabled={disabled} type={type}>
      {text}
    </button>
  );
};

export default Button;
