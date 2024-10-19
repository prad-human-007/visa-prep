import { getServerSession } from "next-auth";
import { authConfig } from "./auth";
import { redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if(!session) return redirect("/api/auth/signin");
}

export async function logout() {
    await signOut({callbackUrl: "/"});
}

// export function loginIsRequiredClient() {
//     if(typeof window != "undefined") {
//         const session = useSession();
//         const router = useRouter();
//         if(!session) router.push("/")
//     }
// }