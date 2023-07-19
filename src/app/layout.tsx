import "./globals.css";
import "../stylesheets/antd-override.css";
import "../stylesheets/layout.css";
import "../stylesheets/loader.css";
import "../stylesheets/shared-classes.css";
import LayoutProvider from "./theme/LayoutProvider";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata = {
  title: "DEVSYNC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </ReduxProvider>
  );
}
