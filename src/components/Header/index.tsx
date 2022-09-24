import logo from "../../assets/chit-chat-logo.png";
import { HiUserCircle } from "react-icons/hi";
import StyledHeader from "./style";
import { useAppSelector } from "../../app/hooks";

function Header() {
  const user = useAppSelector((state) => state.user.user);
  return (
    <StyledHeader>
      <div className="app-logo">
        <img src={logo} alt="" width="30" height="30" />
        <h3>ChitChat</h3>
      </div>
      <div className="user-info">
        <p>{user?.displayName}</p>
        <button className="avatar-wrapper">
          {user?.photoURL ? <img src={user?.photoURL} alt="profile-pic" /> : <HiUserCircle className="avatar" size={28} />}
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;

