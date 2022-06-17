import styled from "styled-components";
import { Theme } from "../../utils/theme/theme";

interface StyledInputProps {
  theme: Theme;
  size?: string;
}

const StyledInput = styled.div<StyledInputProps>`
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
    font-size: ${({ theme }) => theme.fontSizes.medium};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
`;

export default StyledInput;
