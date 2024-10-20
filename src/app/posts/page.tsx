import { createPost } from "@/actions/actions";
import { authConfig } from "@/lib/auth";
import prisma from "@/lib/db";
import { loginIsRequiredServer } from "@/lib/protectedRoute";
import { getServerSession } from "next-auth";


const page = async () => {

    const session = await getServerSession(authConfig);
    const posts = await prisma.post.findMany({
        take: 10,
        skip: 0
    });

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
            <form  action={createPost} className="flex flex-col gap-2 w-full max-w-sm">
                <input 
                    type="text"
                    name="title"
                    placeholder="Input Title"
                    className="px-2 py-1 border rounded-lg border-black"
                />
                <textarea 
                    name="content"
                    placeholder="content"
                    className="px-2 py-1 border rounded-lg border-black"
                />
                <button 
                    name="submit"
                    className="px-2 py-1 border rounded-lg border-black bg-blue-300 "
                >
                Button
                </button>
            </form>
        </div> 
    )
}

export default page;