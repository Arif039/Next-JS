// import { redirect } from "next/navigation"
import Link from "next/link"

export const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return posts;
}

export default async function Posts() {
    const posts = await getPosts();

    // if (posts.length > 10) {
    //     redirect("/");
    // }

    return (
      <div className="gap-8 grid grid-cols-4">

      
            {posts.map((post) => {
              return (

                <div key={post.id} className="border border-red-300">

                  <h1 className="text-2xl font-bold">ID: {post.id} </h1>
                  <h1 className="text-2xl font-bold">Title: {post.title} </h1>
                  <p><b>Description:</b> {post.body} </p>
                  <Link href={`/posts/${post.id}`}> 
                    <b className="text-2xl font-bold text-blue-500">Details</b>
                  </Link>

                </div>
              )

            })}
        

      </div>
    )
  }