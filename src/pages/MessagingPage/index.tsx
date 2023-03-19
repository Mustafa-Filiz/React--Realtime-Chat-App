import { FC } from "react";
import MessageInputArea from "../../components/MessageInputArea";
import { useMessagingPage } from "./useMessagingPage";
import MessageItem from "../../components/MessageItem";
import CCScrollPanel from "../../lib/ui-kit/CCScrollPanel";
import styled from "styled-components";

const MessagingPage: FC = () => {
  const { messages, messageRef, handleSendMessage } = useMessagingPage();

  return (
    <MessagingPageContainer className="w-full">
      <CCScrollPanel
        className="w-full"
        style={{ height: "calc(100vh - 155px)" }}
      >
        {messages.map((message) => (
          // additional div is needed to make scroll to bottom work
          <div ref={messageRef} key={message.id}>
            <MessageItem message={message.text} createdAt={message.createdAt} />
          </div>
        ))}
      </CCScrollPanel>
      <MessageInputArea onFinish={handleSendMessage} />
    </MessagingPageContainer>
  );
};

export default MessagingPage;

const MessagingPageContainer = styled.div`
  .p-scrollpanel-content {
    padding-top: 28px;
    padding-left: 18px;
    background-color: var(--green-100);
  }
`;
