'use client'

import { useRouter } from "next/navigation";

export default function MyButton() {

    const route = useRouter()

    const handleClick = () => {
        route.push("api/auth/signin");
    }

    return(
        <>
        <div>
            <button
            onClick={handleClick}>
                Sign In
            </button>
        </div>
        </>
    )
}