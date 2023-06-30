"use client";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#213555",
          },
        }}
      >
        {pathname === "/login" || pathname === "/register" ? (
          <body>{children}</body>
        ) : (
          <div className="layout__parent">
            <div className="sidebar">
              <span>SideBar</span>
            </div>
            <div className="body">{children}</div>
          </div>
        )}
      </ConfigProvider>
    </html>
  );
}
