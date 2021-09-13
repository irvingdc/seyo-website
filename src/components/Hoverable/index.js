import React from "react";
import * as classes from "./index.module.less";

export default ({ children, title, identifier, selected, onChangeSelect }) => (
  <>
    <div
      className={[
        classes.main,
        selected === identifier ? classes.selected : "",
      ].join(" ")}
      onClick={() => onChangeSelect(identifier)}
      onMouseEnter={() => onChangeSelect(identifier)}
    >
      <button>{title}</button>
      <div className={classes.sub}>
        <div className={classes.animated}>{children}</div>
      </div>
    </div>
    <div className={classes.backdrop}></div>
  </>
);
