import React from "react";
import style from "./index.module.scss";
import noAvatar from "#/assets/images/noAvatar1.png";
import { useSelector } from "react-redux";
import { fields } from "#/utils/constants";

const Document = () => {
  const formData = useSelector((state) => state.form.formFields);

  const _renderinfo = React.useMemo(() => {
    return fields.map((name, index) => (
      <div key={index} className={style["text"]}>
        <div className={style["title"]}>
          {name}: {formData[name] || "-"}
        </div>
      </div>
    ));
  }, [formData]);

  return (
    <div className={style["content"]}>
      <img className={style["image"]} src={noAvatar} alt="loading..."></img>
      {_renderinfo}
    </div>
  );
};

export default React.memo(Document);
