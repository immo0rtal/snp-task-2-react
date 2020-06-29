import React from "react";
import style from "./index.module.scss";
import TextInput from "#/components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "#/store/actions/form";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  React.useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const [data, setData] = React.useState([
    {
      value: "",
    },
    {
      value: "",
    },
    {
      value: "",
    },
    {
      value: "",
    },
    {
      value: "",
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
    return formData.map((input, index) => (
      <TextInput
        key={index}
        data={input}
        onChange={(e) => handleInputChange(index, e)}
      />
    ));
  }, [formData, handleInputChange]);

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

export default React.memo(Form);
