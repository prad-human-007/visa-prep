'use server'

import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
    try {
        await prisma.post.create({
            data: {
                title: formData.get("title") as string,
                content: formData.get("content") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase()
            }
        })
    } catch (error : any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            // Handle specific known Prisma errors
            if (error.code === 'P2002') {
                // P2002 is a unique constraint violation error
                console.error('Unique constraint violation error:', error.meta);
            }
        }
        
    }
    

    revalidatePath("/posts")
}