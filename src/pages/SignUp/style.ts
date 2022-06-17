import styled from "styled-components";
import SignInStyled from "../SignIn/style";


const SignUpStyled = styled(SignInStyled)`
    .sign-in {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.small};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
export default SignUpStyled;