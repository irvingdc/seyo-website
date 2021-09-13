import React from "react";
import * as classes from "./index.module.less";
import { Link } from "gatsby";

export default ({ children, title, to }) => (
  <Link to={to} className={classes.linkContainer}>
    <h4>{title}</h4>
    <div>{children}</div>
  </Link>
);
