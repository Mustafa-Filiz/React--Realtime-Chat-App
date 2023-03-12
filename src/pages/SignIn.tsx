import React, { FC } from "react";
import MessageInputArea from "../components/MessageInputArea";

const SignIn: FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-full bg-gray-200"></div>
      <MessageInputArea />
    </div>
  );
};

export default SignIn;
