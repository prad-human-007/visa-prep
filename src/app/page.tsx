'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('api/auth/signin');
  };

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // </div>
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <main>
        <h1>This is Home Page</h1>
        <button 
        onClick={handleClick}>
          Click Me
        </button>
        </main>
      </div>
    </div>
  );
}
