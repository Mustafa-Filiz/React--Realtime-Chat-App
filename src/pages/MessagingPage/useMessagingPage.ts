import { RefObject, useEffect, useRef, useState } from "react";
import { usePostData } from "../../data/hooks/usePostData";
import { useSubscribeData } from "../../data/hooks/useSubscribeData";
import { Message } from "../../data/models/Message";
import { v4 as uuidv4 } from "uuid";

export const useMessagingPage = () => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const { postData } = usePostData();
  const { subscribeData } = useSubscribeData();

  const sendMessage = async (text: string) => {
    const message: Message = {
      id: uuidv4(),
      text,
      timestamp: Date.now(),
    };

    await postData(`messages/${message.id}`, message);
  };

  const subscribeToMessages = async () => {
    await subscribeData(`messages/`, (data: Message[]) => {
      if (!data) return;

      const dataArr = Object.values(data).sort(
        (a, b) => a.timestamp - b.timestamp
      );

      if (!dataArr.length) return;
      if (dataArr.length === messages.length) return;

      setMessages(dataArr);
    });
  };

  const handleFinish = (values: any) => {
    if (!values.message) return;
    sendMessage(values.message);
  };

  useEffect(() => {
    subscribeToMessages();

    if (!messageRef.current) return;
    messageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    return () => {
      subscribeToMessages();
    };
  }, [messages.length]);

  return { messages, messageRef, sendMessage, handleFinish };
};
