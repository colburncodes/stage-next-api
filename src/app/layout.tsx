import "./globals.css";
import LayoutProvider from "./theme/LayoutProvider";
import "../stylesheets/antd-override.css";
import "../stylesheets/layout.css";
import "../stylesheets/loader.css";
import "../stylesheets/shared-classes.css";

export const metadata = {
  title: "DevPortal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
