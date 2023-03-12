import { FC } from "react";
import CCInput from "../../lib/ui-kit/CCInput";
import CCButton from "../../lib/ui-kit/CCButton";
import { PrimeIcons } from "primereact/api";
import { useFormik } from "formik";

interface MessageInputAreaProps {
  onFinish: (values: any) => void;
}

const MessageInputArea: FC<MessageInputAreaProps> = ({ onFinish }) => {
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onFinish(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-0 w-full flex align-items-center gap-2 p-3"
    >
      <CCInput
        className="flex-1"
        placeholder="Your message"
        id="message"
        name="message"
        value={values.message}
        onInput={handleChange}
      />
      <CCButton type="submit" icon={PrimeIcons.SEND} raised size="large" />
    </form>
  );
};

export default MessageInputArea;
