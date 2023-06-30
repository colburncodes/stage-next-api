import axios from "axios";
import { cookies } from "next/headers";

export async function getUser() {
  try {
    const token = cookies().get("token");
    const response = await axios.get(`${process.env.BASE_URL}api/users/user`, {
      headers: {
        Cookie: `token=${token?.value}`,
      },
    });
    return response.data.data;
  } catch (error: any) {
    console.log(error);
  }
}

export default async function Home() {
  const user = await getUser();

  return (
    <main>
      <h1>Dev Portal</h1>
      <p>Authorized User {user && user.email}</p>
    </main>
  );
}
