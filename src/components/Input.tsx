import { Theme } from "../utils/theme/theme";
import { StyledInput } from "./componentStyles";

interface InputProps {
  icon?: React.ReactNode;
  inputType?: string;
  className?: string;
  size?: keyof Theme["sizes"];
  placeholder?: string;
}

function Input({ icon, className, size, inputType, placeholder }: InputProps) {
  return (
    <StyledInput className={className} size={size}>
      {icon && <span className="input-icon-wrapper">{icon}</span>}
      <input type={inputType} placeholder={placeholder} />
    </StyledInput>
  );
}

export default Input;
