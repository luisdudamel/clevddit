import "./Button.scss";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button>{text}</button>;
};

export default Button;
