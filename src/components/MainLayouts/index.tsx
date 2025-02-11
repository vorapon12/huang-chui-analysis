import { PropsWithChildren } from "react";
import LeftDrawer from "./Drawer";

export const MainLayouts = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <LeftDrawer />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
};
