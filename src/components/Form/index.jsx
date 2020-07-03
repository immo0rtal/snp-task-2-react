import React from "react";
import style from "./index.module.scss";
import TextInput from "#/components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "#/store/actions/form";
import { fields } from "#/utils/constants";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formFields);

  React.useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const valid = React.useMemo(() => {
    return Object.values(formData).some((text) => !text);
  }, [formData]);

  const [isNotValid, setIsNotValid] = React.useState(valid);

  const handleFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      setIsNotValid(valid);
    },
    [valid]
  );

  const handleInputChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      const { name } = event.target.dataset;
      dispatch(changeField({ value, name }));
    },
    [dispatch]
  );

  const _renderInput = React.useMemo(() => {
    return fields.map((name, index) => (
      <TextInput
        key={index}
        name={name}
        data={formData}
        onChange={handleInputChange}
      />
    ));
  }, [formData, handleInputChange]);

  return (
    <div className={style["content"]}>
      <form className={style["form"]} onSubmit={handleFormSubmit}>
        <div className={style["title"]}>Contact us</div>
        {_renderInput}
        <button type="submit" className={style["button"]}>
          Submit
        </button>
        {isNotValid && (
          <span style={{ color: "red", fontSize: "11px", marginTop: "10px" }}>
            not all fields are filled
          </span>
        )}
      </form>
    </div>
  );
};

export default React.memo(Form);
