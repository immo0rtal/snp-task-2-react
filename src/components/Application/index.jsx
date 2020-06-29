import React from "react";
import style from "./index.module.scss";
import Document from "#/components/Document";
import Form from "#/components/Form";

const App = () => {
  return (
    <div className={style.content}>
      <Form />
      <Document />
    </div>
  );
};

export default App;
