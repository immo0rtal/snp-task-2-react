import React from "react";
import style from "./index.module.scss";
import TextInput from "#/components/TextInput";
import { useDispatch } from "react-redux";
import { changeField } from "#/store/actions/form";
import { emailRegex, phoneRegex, dateRegex } from "#/utils/constants";

const Form = () => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState([
    {
      value: "",
      name: "fullname",
      placeholder: "Enter your name",
      validatorFn: (value) => value.length <= 21,
      validatorErrorMessage: "Invalid fullname. Lenth more 21 symbols",
    },
    {
      value: "",
      name: "email",
      width: "49%",
      placeholder: "Enter your email",
      validatorFn: (value) => !value.length || value.match(emailRegex),
      validatorErrorMessage: "Invalid email. Please use a@mail.ru",
    },
    {
      value: "",
      name: "phone",
      width: "49%",
      placeholder: "Enter your phone number",
      validatorFn: (value) => !value.length || value.match(phoneRegex),
      validatorErrorMessage: "Please use +7|8 *** *** ** **",
    },
    {
      value: "",
      name: "date",
      placeholder: "Enter date",
      validatorFn: (value) => !value.length || value.match(dateRegex),
      validatorErrorMessage: "Invalid date. Please use dd.mm.yyyy",
    },
    {
      value: "",
      name: "message",
      placeholder: "Your message here",
      isTextArea: true,
      validatorFn: (value) => value.length <= 483,
      validatorErrorMessage: "Invalid message. Lenth more 486 symbols",
    },
  ]);

  const handleInputChange = React.useCallback(
    (index, event) => {
      const nextData = [...data];
      const { value } = event.target;
      nextData[index] = { ...nextData[index], value: value };
      setData(nextData);
      dispatch(changeField({ value, index }));
    },
    [data, dispatch]
  );

  const _renderInput = React.useMemo(() => {
    return data.map((input, index) => (
      <TextInput
        key={index}
        data={input}
        onChange={(e) => handleInputChange(index, e)}
      />
    ));
  }, [data, handleInputChange]);

  return (
    <div className={style["content"]}>
      <form className={style["form"]}>
        <div className={style["title"]}>Contact us</div>
        {_renderInput}
        <button type="submit" className={style["button"]}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
