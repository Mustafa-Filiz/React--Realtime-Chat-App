import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import SignUpStyled from "./style";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
  name: yup.string().required(),
  lastName: yup.string().required(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      lastName: "",
      createdOn: new Date(),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <SignUpStyled>
      <h2>Sign Up</h2>
      <Button icon={<FcGoogle size={26} />} color="primary" size="small">
        Sign up with Google
      </Button>
      <div className="info">
        <div className="info-text-line" />
        <p className="info-text">or sign up with email</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
      <Input
          name="name"
          inputType="text"
          placeholder="First Name"
          icon={<BiUserCircle size={22} />}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          name="lastName"
          inputType="text"
          placeholder="Last Name"
          icon={<BiUserCircle size={22} />}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <Input
          name="email"
          inputType="email"
          placeholder="Email"
          icon={<HiOutlineMail size={22} />}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name="password"
          inputType="password"
          placeholder="Password"
          icon={<BsKey size={22} />}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Input
          name="passwordConfirmation"
          inputType="password"
          placeholder="Password again"
          icon={<BsKey size={22} />}
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
        />
        <Button type="submit" color="darkGreen" size="medium">
          Sign up
        </Button>
      </form>
      <p className="sign-in">
        Back to <Link to="/">Sign in</Link>
      </p>
    </SignUpStyled>
  );
}

export default SignUp;
