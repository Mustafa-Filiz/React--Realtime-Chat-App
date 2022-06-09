import styled from "styled-components";

export const SignInStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: ${({ theme }) => theme.sizes.xxlarge};
  }
  & > button {
    margin-bottom: ${({ theme }) => theme.sizes.xxlarge};
  }
  .info {
    position: relative;
    width: 100%;
    height: 20px;
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
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
