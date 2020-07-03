import React from "react";
import style from "./index.module.scss";
import { validatorFn, getError } from "#/utils/validatorFn";
import { placeholders } from "#/utils/constants";

const TextInput = (props) => {
  const { name, data, onChange } = props;

  const getPlaceholder = React.useCallback(() => {
    return placeholders[name];
  }, [name]);

  const valid = React.useMemo(() => {
    return validatorFn(name, data[name]);
  }, [name, data]);

  const [isValid, setIsValid] = React.useState(valid);

  const handleOnInputBlur = React.useCallback(() => {
    setIsValid(valid);
  }, [valid]);

  const _inputTypes = React.useMemo(() => {
    return (
      <div className={`${style[`${name}`]} ${style["name"]}`}>
        <span className={style["label-input"]}>{name}*</span>
        {name === "message" ? (
          <textarea
            data-name={name}
            value={data[name]}
            onChange={onChange}
            className={style["form-textarea"]}
            placeholder={getPlaceholder(name)}
            onBlur={handleOnInputBlur}
          ></textarea>
        ) : (
          <input
            data-name={name}
            value={data[name]}
            onChange={onChange}
            className={style["form-input"]}
            type="text"
            onBlur={handleOnInputBlur}
            placeholder={getPlaceholder(name)}
          />
        )}
        {!isValid && (
          <span style={{ color: "red", fontSize: "11px" }}>
            {getError(name)}
          </span>
        )}
      </div>
    );
  }, [data, onChange, getPlaceholder, name, handleOnInputBlur, isValid]);

  return <>{_inputTypes}</>;
};

export default React.memo(TextInput);
