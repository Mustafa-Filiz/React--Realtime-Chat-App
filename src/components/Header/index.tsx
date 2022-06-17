import logo from "../../assets/chit-chat-logo.png";
import { HiUserCircle } from "react-icons/hi";
import StyledHeader from "./style";


function Header() {
  return (
    <StyledHeader>
      <div className="app-logo">
        <img src={logo} alt="" width="30" height="30" />
        <h3>ChitChat</h3>
      </div>
      <div className="user-info">
        <p>Mustafa Filiz</p>
        <button className="avatar-wrapper">
          <HiUserCircle className="avatar" size={28} />
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;

