import { FC } from "react";
import CCCard, { CCCardProps } from "../../lib/ui-kit/CCCard";
import styled from "styled-components";

interface MessageItemProps extends CCCardProps {
  message: string;
  createdAt: number;
}

const MessageItem: FC<MessageItemProps> = ({
  message,
  createdAt,
  ...props
}) => {
  const date = new Date(createdAt).toLocaleString();

  return (
    <MessageItemContainer footer={date} {...props}>
      {message}
    </MessageItemContainer>
  );
};

export default MessageItem;

const MessageItemContainer = styled(CCCard)`
  position: relative;
  margin-bottom: 10px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    right: -10px;
    border: 10px solid transparent;
    border-right: 0;
    border-left: 20px solid var(--surface-0);
  }

  .p-card-body {
    padding: 0.5rem;
  }

  .p-card-content {
    padding: 0;
  }
  .p-card-footer {
    padding: 0;
    text-align: right;
    font-size: 12px;
    color: var(--gray-500);
  }
`;
