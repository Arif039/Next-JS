// import { redirect } from "next/navigation"

export default async function Posts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    // if (posts.length > 10) {
    //     redirect("/");
    // }

    return (
      <div className="">

        <ul className=" gap-4 grid grid-cols-4">
            {posts.map((post) => (
            <li key={post.id} className="border border-red-300">{post.title}</li>
            ))}
        </ul>

      </div>
    )
  }