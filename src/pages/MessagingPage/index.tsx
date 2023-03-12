import { FC, useEffect, useRef } from "react";
import MessageInputArea from "../../components/MessageInputArea";
import { useMessagingPage } from "./useMessagingPage";
import { ScrollPanel } from "primereact/scrollpanel";
import MessageItem from "../../components/MessageItem";
import CCScrollPanel from "../../lib/ui-kit/CCScrollPanel";

const MessagingPage: FC = () => {
  const { messages, messageRef, handleFinish } = useMessagingPage();

  return (
    <div className="w-full">
      <CCScrollPanel
        className="w-full"
        style={{ height: "calc(100vh - 155px)" }}
      >
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            ref={messageRef}
            message={message.text}
            timestamp={message.timestamp}
          />
        ))}
      </CCScrollPanel>
      <MessageInputArea onFinish={handleFinish} />
    </div>
  );
};

export default MessagingPage;
