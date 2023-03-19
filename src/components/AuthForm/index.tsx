import { FC } from "react";
import CCInput from "../../lib/ui-kit/CCInput";
import CCPassword from "../../lib/ui-kit/CCPassword";
import { useFormik } from "formik";
import { object, string } from "yup";
import CCButton from "../../lib/ui-kit/CCButton";

const AuthForm: FC = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("🤖 ~ values:", values);
    },
  });

  return (
    <div className="p-2">
      <form
        action=""
        className="flex flex-column gap-2"
        onSubmit={handleSubmit}
      >
        <span className="p-float-label">
          <CCInput
            id="email"
            name="email"
            keyfilter="email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="email">E-Mail</label>
        </span>
        <span className="p-float-label">
          <CCPassword
            id="password"
            name="password"
            toggleMask
            value={values.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </span>
        <CCButton label="Sign In" type="submit" />
      </form>
    </div>
  );
};

export default AuthForm;
