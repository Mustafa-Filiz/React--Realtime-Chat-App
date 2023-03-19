import { User } from "./User";

export interface Message {
  id: string;
  text: string;
  createdAt: number;
  // sender: User;
  // receiver: User;
}
