import { HTMLAttributes, RefAttributes } from "react";

export interface IHTMLElementProps<T>
  extends RefAttributes<T>,
    HTMLAttributes<T> {}
