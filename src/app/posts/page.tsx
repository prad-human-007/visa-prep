import { authConfig } from "@/lib/auth";
import { loginIsRequiredServer } from "@/lib/protectedRoute";
import { getServerSession } from "next-auth";


const page = async () => {

    const session = await getServerSession(authConfig);

    return(
        <div>
            <h1>This is the default post page</h1>
            <h1>This is the user name: {session?.user?.name}</h1>
        </div>
    )
}

export default page;