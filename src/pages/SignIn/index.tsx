import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import SignInStyled from "./style";

function SignIn() {
  return (
    <SignInStyled>
      <h2>Sign In</h2>
      <Button icon={<FcGoogle size={26} />} color="primary" size="small">
        Sign in with Google
      </Button>
      <div className="info">
        <div className="info-text-line" />
        <p className="info-text">or sign in with email</p>
      </div>
      <form>
        <Input
          inputType="text"
          placeholder="Email"
          icon={<HiOutlineMail size={22} />}
        />
        <Input
          inputType="password"
          placeholder="Password"
          icon={<BsKey size={22} />}
        />
        <Button color="darkGreen" size="medium">
          Sign in
        </Button>
      </form>
      <p className="sign-up">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </SignInStyled>
  );
}

export default SignIn;
