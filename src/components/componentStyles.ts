import styled from "styled-components";
import { Theme } from "../utils/theme/theme";

interface StyledInputProps {
  theme: Theme;
  size?: string;
}

export const StyledInput = styled.div<StyledInputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: ${({ theme, size }) => (size ? theme.sizes[size] : "10px")};
  .input-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  input {
    flex-grow: 1;
    border: none;
    outline: none;
  }
`;

interface StyledButtonProps {
  theme: Theme;
  color: keyof Theme["colors"];
  size?: keyof Theme["sizes"];
}
export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, color }) =>
    theme.colors[color !== "white" ? "white" : "black"]};
  padding: ${({ theme, size }) => (size ? theme.sizes[size] : "0px")};
  font-size: ${({ theme, size }) => (size ? theme.fontSizes[size] : "16px")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  width: 100%;
  .btn-icon-wrapper {
    background-color: ${({ theme }) => theme.colors["white"]};
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme, size }) => (size ? theme.sizes[size] : "10px")};
  }
  .btn-text {
    flex-grow: 1;
    text-align: center;
  }
  &:active {
    transform: scale(0.97);
  }
`;
