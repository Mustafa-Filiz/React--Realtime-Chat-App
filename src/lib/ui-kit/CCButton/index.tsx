import { FC } from "react";
import { Button, ButtonProps } from "primereact/button";

interface CCButtonProps extends ButtonProps {}

const CCButton: FC<CCButtonProps> = ({
  type,
  badge,
  badgeClassName,
  children,
  disabled,
  icon,
  iconPos,
  label,
  link,
  loading,
  loadingIcon,
  outlined,
  raised,
  rounded,
  severity,
  size,
  text,
  tooltip,
  tooltipOptions,
  visible,
}) => {
  return (
    <Button
      type={type}
      badge={badge}
      badgeClassName={badgeClassName}
      children={children}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      label={label}
      link={link}
      loading={loading}
      loadingIcon={loadingIcon}
      outlined={outlined}
      raised={raised}
      rounded={rounded}
      severity={severity}
      size={size}
      text={text}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      visible={visible}
    />
  );
};

export default CCButton;
