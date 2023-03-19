import { FC, HTMLAttributes, ReactNode } from "react";
import { Menubar, MenubarProps } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import styled from "styled-components";

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
    <CCMenubarContaier
      children={children}
      end={end}
      model={model}
      start={start}
      {...props}
    />
  );
};

export default CCMenubar;

const CCMenubarContaier = styled(Menubar)`
  .p-submenu-list {
    z-index: 5;
  }
`;
