import styled from "styled-components";

const StyledHeader = styled.header`
width: 100%;
height: ${({ theme }) => theme.sizes.xxlarge};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 ${({ theme }) => theme.sizes.medium};
border-bottom: 2px solid ${({ theme }) => theme.colors.lightGreen};
.app-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: ${({ theme }) => theme.sizes.medium};
  }
  h3 {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
}
.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  .avatar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ theme }) => theme.sizes.small};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.sizes.small};
  }
}
`

export default StyledHeader;