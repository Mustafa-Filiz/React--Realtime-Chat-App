import { Theme } from "../../utils/theme/theme";
import StyledButton from "./style";
interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  color: keyof Theme["colors"];
  size?: keyof Theme["sizes"];
  type?: "submit" | "button";
}

function Button({ children, icon, className, color, size, type }: ButtonProps) {
  return (
    <StyledButton type={type} className={className} color={color} size={size}>
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      <span className="btn-text">{children}</span>
    </StyledButton>
  );
}

export default Button;
