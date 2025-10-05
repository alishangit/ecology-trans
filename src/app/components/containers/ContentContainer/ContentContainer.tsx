import React, { ReactNode } from "react";
import classes from "./ContentContainer.module.css";

type PaddingSize = "small" | "medium" | "large";

interface IContentContainer {
  children?: ReactNode;
  padding?: PaddingSize;
}

const ContentContainer = ({
  children,
  padding = "medium",
}: IContentContainer) => {
  return (
    <div
      className={`${classes.contentContainer} ${classes[`padding-${padding}`]}`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
