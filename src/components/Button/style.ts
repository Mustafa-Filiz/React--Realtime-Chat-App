import styled from "styled-components";
import { Theme } from "../../utils/theme/theme";

interface StyledButtonProps {
    theme: Theme;
    color: keyof Theme["colors"];
    size?: keyof Theme["sizes"];
  }

const StyledButton = styled.button<StyledButtonProps>`
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

  export default StyledButton;