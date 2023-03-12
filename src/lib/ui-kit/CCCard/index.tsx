import { FC, ReactNode } from "react";
import { Card, CardProps } from "primereact/card";

export interface CCCardProps extends CardProps {
  children?: ReactNode;
  footer?: ReactNode | ((props: CardProps) => ReactNode);
  header?: ReactNode | ((props: CardProps) => ReactNode);
  subTitle?: ReactNode | ((props: CardProps) => ReactNode);
  title?: ReactNode | ((props: CardProps) => ReactNode);
}

const CCCard: FC<CCCardProps> = ({
  children,
  footer,
  header,
  subTitle,
  title,
  ...props
}) => {
  return (
    <Card
      footer={footer}
      header={header}
      subTitle={subTitle}
      title={title}
      {...props}
    >
      <p className="m-0">{children}</p>
    </Card>
  );
};

export default CCCard;
