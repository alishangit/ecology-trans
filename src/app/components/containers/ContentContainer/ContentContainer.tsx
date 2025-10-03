import React, { ReactNode } from "react";
import classes from "./ContentContainer.module.css";

interface IContentContainer {
  children?: ReactNode;
}

const ContentContainer = ({ children }: IContentContainer) => {
  return <div className={classes.contentContainer}>{children}</div>;
};

export default ContentContainer;
