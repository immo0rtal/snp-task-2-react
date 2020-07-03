import React from "react";
import style from "./index.module.scss";
import { validatorFn, getError } from "#/utils/validatorFn";
import { placeholders } from "#/utils/constants";

const TextInput = (props) => {
  const { name, data, onChange } = props;

  const getPlaceholder = React.useCallback(() => {
    return placeholders[name];
  }, [name]);

  const _inputTypes = React.useMemo(() => {
    const isValid = validatorFn(name, data[name]);

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
          ></textarea>
        ) : (
          <input
            data-name={name}
            value={data[name]}
            onChange={onChange}
            className={style["form-input"]}
            type="text"
            placeholder={getPlaceholder(name)}
            required
          />
        )}
        {!isValid && (
          <span style={{ color: "red", fontSize: "11px" }}>
            {getError(name)}
          </span>
        )}
      </div>
    );
  }, [data, onChange, getPlaceholder, name]);

  return <>{_inputTypes}</>;
};

export default React.memo(TextInput);
