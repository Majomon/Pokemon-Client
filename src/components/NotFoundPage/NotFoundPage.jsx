import React from "react";
import style from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={style.containerNotFound}>
      <h1>Error HTTP 404 (Not Found)</h1>
    </div>
  );
}

export default NotFoundPage;
