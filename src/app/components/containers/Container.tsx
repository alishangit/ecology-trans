import React, { ReactNode } from "react";

interface Props {
  fullWidth?: boolean;
  children?: ReactNode;
}
const Container = ({ fullWidth = false, children }: Props) => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: fullWidth ? "100%" : "95%",
        maxWidth: "90%",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
