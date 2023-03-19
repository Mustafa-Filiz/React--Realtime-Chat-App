import { KeyFilterType } from "primereact/keyfilter";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { CSSProperties, FC, FormEvent, ReactNode, Ref } from "react";
import {
  Password,
  PasswordIconEvent,
  PasswordProps,
} from "primereact/password";

interface CCPasswordProps extends PasswordProps {
  appendTo?: null | HTMLElement | "self";
  children?: ReactNode;
  content?: ReactNode | ((props: PasswordProps) => ReactNode);
  feedback?: boolean;
  footer?: ReactNode | ((props: PasswordProps) => ReactNode);
  header?: ReactNode | ((props: PasswordProps) => ReactNode);
  icon?: ReactNode | ((event: PasswordIconEvent) => ReactNode);
  inputClassName?: string;
  inputId?: string;
  inputRef?: Ref<HTMLInputElement>;
  inputStyle?: CSSProperties;
  keyfilter?: KeyFilterType;
  mediumLabel?: string;
  mediumRegex?: string;
  panelClassName?: string;
  panelStyle?: CSSProperties;
  promptLabel?: string;
  strongLabel?: string;
  strongRegex?: string;
  toggleMask?: boolean;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  weakLabel?: string;
  onHide?: () => void;
  onInput?: (
    event: FormEvent<HTMLInputElement>,
    validatePattern: boolean
  ) => void;
  onShow?: () => void;
}

const CCPassword: FC<CCPasswordProps> = ({
  appendTo,
  children,
  content,
  feedback,
  footer,
  header,
  icon,
  inputClassName,
  inputId,
  inputRef,
  inputStyle,
  keyfilter,
  mediumLabel,
  mediumRegex,
  panelClassName,
  panelStyle,
  promptLabel,
  strongLabel,
  strongRegex,
  toggleMask,
  tooltip,
  tooltipOptions,
  weakLabel,
  onHide,
  onInput,
  onShow,
  ...props
}) => {
  return (
    <Password
      appendTo={appendTo}
      children={children}
      content={content}
      feedback={feedback}
      footer={footer}
      header={header}
      icon={icon}
      inputClassName={inputClassName}
      inputId={inputId}
      inputRef={inputRef}
      inputStyle={inputStyle}
      keyfilter={keyfilter}
      mediumLabel={mediumLabel}
      mediumRegex={mediumRegex}
      panelClassName={panelClassName}
      panelStyle={panelStyle}
      promptLabel={promptLabel}
      strongLabel={strongLabel}
      strongRegex={strongRegex}
      toggleMask={toggleMask}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      weakLabel={weakLabel}
      onHide={onHide}
      onInput={onInput}
      onShow={onShow}
      {...props}
    />
  );
};

export default CCPassword;
