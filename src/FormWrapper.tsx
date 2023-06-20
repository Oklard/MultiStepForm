import { ReactNode } from "react";

type FormWrapperTypes = {
  title: string;
  children: ReactNode;
};
export function FormWarapper({ title, children }: FormWrapperTypes) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem, .5rem",
          justifyContent: "flex-start",
          gridTemplate: "auto minmax(auto, 400px)",
        }}>
        {children}
      </div>
    </>
  );
}
