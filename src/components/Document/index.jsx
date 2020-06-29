import React from "react";
import style from "./index.module.scss";
import noAvatar from "#/assets/images/noAvatar1.png";
import { useSelector } from "react-redux";

const Document = () => {
  const form = useSelector((state) => state.form);

  const _renderinfo = React.useMemo(() => {
    return form.map((info, index) => (
      <div key={index} className={style["text"]}>
        <div className={style["title"]}>
          {info.name} {info.value || "-"}
        </div>
      </div>
    ));
  }, [form]);

  return (
    <div className={style["content"]}>
      <img className={style["image"]} src={noAvatar} alt="loading..."></img>
      {_renderinfo}
    </div>
  );
};

export default React.memo(Document);
