import { authConfig } from "@/lib/auth";
import prisma from "@/lib/db";
import { loginIsRequiredServer } from "@/lib/protectedRoute";
import { getServerSession } from "next-auth";


const page = async () => {

    const session = await getServerSession(authConfig);
    const posts = await prisma.post.findMany();

    return(
        <div>
            <h1>This is the default post page</h1>
            <h1>This is the user name: {session?.user?.name}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h1>{post.title}</h1>
                    </li>
                ))}
            </ul>
        </div> 
    )
}

export default page;