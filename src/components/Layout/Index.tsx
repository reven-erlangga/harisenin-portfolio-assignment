import { ReactNode } from "react";
import Sidebar from "../Sidebar/Index";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <Sidebar />
      <div className="w-full">
        <div>
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="text-base-content text-left">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
