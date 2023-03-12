import { User } from "./User";

export interface Message {
  id: string;
  text: string;
  timestamp: number;
  // sender: User;
  // receiver: User;
}
