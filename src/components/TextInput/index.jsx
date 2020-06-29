import React from "react";
import style from "./index.module.scss";

const TextInput = (props) => {
  const { data, onChange } = props;
  const _inputTypes = React.useMemo(() => {
    const isValid = data.validatorFn(data.value);

    return (
      <div className={`${style[`${data.name}`]} ${style["name"]}`}>
        <span className={style["label-input"]}>{data.name}*</span>
        {data.isTextArea ? (
          <textarea
            value={data.value}
            onChange={onChange}
            className={style["form-textarea"]}
            placeholder={`${data.placeholder}`}
          ></textarea>
        ) : (
          <input
            value={data.value}
            onChange={onChange}
            className={style["form-input"]}
            type="text"
            placeholder={`${data.placeholder}`}
            required
          />
        )}
        {!isValid && (
          <span style={{ color: "red" }}>{data.validatorErrorMessage}</span>
        )}
      </div>
    );
  }, [data, onChange]);

  return <>{_inputTypes}</>;
};

export default React.memo(TextInput);
