import styled from "styled-components";

const SignInStyled = styled.div`
  min-height: calc(100% - 3rem);
  width: 100%;
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: ${({ theme }) => theme.sizes.xlarge};
  }
  & > button {
    margin-bottom: ${({ theme }) => theme.sizes.xlarge};
  }
  .info {
    position: relative;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.sizes.xlarge};
    .info-text-line {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray};
    }
    .info-text {
      position: absolute;
      transform: translate(30%, -50%);
      background-color: ${({ theme }) => theme.colors.white};
      padding: 0 10px;
      color: ${({ theme }) => theme.colors.gray};
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & > * {
      margin-bottom: ${({ theme }) => theme.sizes.xlarge};
    }
  }
  .sign-up {
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
`;

export default SignInStyled;