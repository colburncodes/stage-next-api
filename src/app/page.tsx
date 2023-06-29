"use client";
import message from "antd/es/message";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  const getUser = async () => {
    try {
      const response = await axios.get("/api/users/user");
      setUser(response.data.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <h1>Dev Portal</h1>
      <p>Authorized User {user && user.email}</p>
    </main>
  );
}
