import "./Button.scss";

interface ButtonProps {
  text: string;
  type: string;
}

const Button = ({ text, type }: ButtonProps): JSX.Element => {
  return <button>{text}</button>;
};

export default Button;
