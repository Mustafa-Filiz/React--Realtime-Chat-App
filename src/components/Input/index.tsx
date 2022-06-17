import { Theme } from "../../utils/theme/theme";
import StyledInput from "./style";
interface InputProps {
  icon?: React.ReactNode;
  inputType?: string;
  className?: string;
  size?: keyof Theme["sizes"];
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  icon,
  className,
  size,
  inputType,
  placeholder,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <StyledInput className={className} size={size}>
      {icon && <span className="input-icon-wrapper">{icon}</span>}
      <input
        type={inputType}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  );
}

export default Input;
