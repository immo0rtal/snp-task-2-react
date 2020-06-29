import React from "react";
import style from "./index.module.scss";
import { validatorFn, getError } from "#/utils/validatorFn";
import { placeholders } from "#/utils/constants";

const TextInput = (props) => {
  const { data, onChange } = props;

  const getPlaceholder = React.useCallback(() => {
    return placeholders[data.name];
  }, [data]);

  const _inputTypes = React.useMemo(() => {
    const isValid = validatorFn(data.name, data.value);

    return (
      <div className={`${style[`${data.name}`]} ${style["name"]}`}>
        <span className={style["label-input"]}>{data.name}*</span>
        {data.isTextArea ? (
          <textarea
            value={data.value}
            onChange={onChange}
            className={style["form-textarea"]}
            placeholder={getPlaceholder(data.name)}
          ></textarea>
        ) : (
          <input
            value={data.value}
            onChange={onChange}
            className={style["form-input"]}
            type="text"
            placeholder={getPlaceholder(data.name)}
            required
          />
        )}
        {!isValid && (
          <span style={{ color: "red" }}>{getError(data.name)}</span>
        )}
      </div>
    );
  }, [data, onChange, getPlaceholder]);

  return <>{_inputTypes}</>;
};

export default React.memo(TextInput);
