"use client";
import { ConfigProvider } from "antd";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#213555",
          },
        }}
      >
        <body>{children}</body>
      </ConfigProvider>
    </html>
  );
}
