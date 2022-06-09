import { Theme } from "../utils/theme/theme";
import { StyledButton } from "./componentStyles";

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  color: keyof Theme["colors"];
  size?: keyof Theme["sizes"];
}

function Button({ children, icon, className, color, size }: ButtonProps) {
  return (
    <StyledButton className={className} color={color} size={size}>
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      <span className="btn-text">{children}</span>
    </StyledButton>
  );
}

export default Button;
