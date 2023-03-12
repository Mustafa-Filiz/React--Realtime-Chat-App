import { FC, RefObject } from "react";
import CCCard, { CCCardProps } from "../../lib/ui-kit/CCCard";

interface MessageItemProps extends CCCardProps {
  message: string;
  timestamp: number;
  ref: RefObject<HTMLDivElement>;
}

const MessageItem: FC<MessageItemProps> = ({
  message,
  timestamp,
  ...props
}) => {
  const date = new Date(timestamp).toLocaleString();

  return (
    <CCCard footer={date} {...props}>
      {message}
    </CCCard>
  );
};

export default MessageItem;
