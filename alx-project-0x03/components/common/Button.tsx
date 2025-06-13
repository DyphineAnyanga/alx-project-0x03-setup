interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button = ({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
