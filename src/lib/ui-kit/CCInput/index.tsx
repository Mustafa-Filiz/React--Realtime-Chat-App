import { FC } from "react";
import { InputText, InputTextProps } from "primereact/inputtext";

interface CCInputProps extends InputTextProps {}

const CCInput: FC<CCInputProps> = ({
  id,
  name,
  className,
  placeholder,
  keyfilter,
  tooltip,
  tooltipOptions,
  validateOnly = false,
  value,
  onInput,
}) => {
  return (
    <InputText
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      keyfilter={keyfilter}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      validateOnly={validateOnly}
      value={value}
      onInput={onInput}
    />
  );
};

export default CCInput;
