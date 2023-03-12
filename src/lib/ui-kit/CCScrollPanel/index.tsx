import { ScrollPanel, ScrollPanelProps } from "primereact/scrollpanel";
import React, { Children, FC } from "react";

interface CCScrollPanelProps extends ScrollPanelProps {
  children: React.ReactNode;
}

const CCScrollPanel: FC<CCScrollPanelProps> = ({ children, ...props }) => {
  return <ScrollPanel {...props}>{children}</ScrollPanel>;
};

export default CCScrollPanel;
