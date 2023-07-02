"use client";
import { ConfigProvider, Avatar, message } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetUser } from "@/redux/usersSlice";
import Loader from "@/components/Loader";
import { SetLoading } from "@/redux/loaderSlice";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useSelector((state: any) => state.users);
  const { isLoading } = useSelector((state: any) => state.loader);
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(true);
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-3-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-3-line",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "ri-file-list-line",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "ri-settings-2-line",
    },
    {
      name: "Saved",
      path: "/saved",
      icon: "ri-save-line",
    },
  ];

  const getUser = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get("api/users/user");
      dispatch(SetUser(response.data.data));
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/register") {
      getUser();
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#213555",
            },
          }}
        >
          {isLoading && <Loader />}

          {pathname === "/login" || pathname === "/register" ? (
            <body>{children}</body>
          ) : (
            <div className="layout__parent">
              <div className="sidebar">
                <div className="logo">
                  {showSidebar && <h1>DEVSYNC</h1>}
                  {showSidebar && <i className="ri-loop-right-line"></i>}
                  {!showSidebar && (
                    <i
                      className="ri-menu-line"
                      onClick={() => setShowSidebar(!showSidebar)}
                    ></i>
                  )}

                  {showSidebar && (
                    <i
                      className="ri-close-line"
                      onClick={() => setShowSidebar(!showSidebar)}
                    ></i>
                  )}
                </div>
                <div className="menu__items">
                  {menuItems.map((item, idx) => {
                    const isActive = pathname === item.path;
                    return (
                      <div
                        key={idx}
                        className={`menu__item ${
                          isActive ? "active-menu-item" : ""
                        }`}
                      >
                        <i className={item.icon}></i>
                        <span>{showSidebar && item.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="user-info">
                  {showSidebar && (
                    <div>
                      <Avatar.Group
                        maxCount={2}
                        maxPopoverTrigger="click"
                        size="default"
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                          cursor: "pointer",
                        }}
                      >
                        <Avatar
                          style={{ backgroundColor: "#f56a00" }}
                          shape="circle"
                          alt="Avatar"
                        >
                          {user?.name}
                        </Avatar>
                      </Avatar.Group>
                    </div>
                  )}

                  <span>
                    <i className="ri-logout-box-r-line"></i>
                  </span>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}
