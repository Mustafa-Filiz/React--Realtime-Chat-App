import { FC, HTMLAttributes, ReactNode } from "react";
import { Menubar, MenubarProps } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

interface CCMenubarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  end?: ReactNode | ((props: MenubarProps) => ReactNode);
  model: MenuItem[];
  start?: ReactNode | ((props: MenubarProps) => ReactNode);
}

const CCMenubar: FC<CCMenubarProps> = ({
  children,
  end,
  model,
  start,
  ...props
}) => {
  return (
    <Menubar
      children={children}
      end={end}
      model={model}
      start={start}
      {...props}
    />
  );
};

export default CCMenubar;
