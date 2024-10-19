
import { getServerSession } from "next-auth";
import MyButton from "@/components/MyButton";
import { authConfig } from "@/lib/auth";

export default async function Home() {

  const session = await getServerSession(authConfig);

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // </div>
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <main>
        <h1>This is Home Page</h1>
        <h1>This is my session: {session?.user?.email}</h1>
        <MyButton/>
        </main>
      </div>
    </div>
  );
}
