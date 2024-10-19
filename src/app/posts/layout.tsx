import { loginIsRequiredServer } from "@/lib/protectedRoute"

export default async function lay({children} : { children: React.ReactNode }){
    
    await loginIsRequiredServer()

    return(
        <div>
            {children}
        </div>
    )
}