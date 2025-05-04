
export const getSinglePost = async (post_id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const posts = await data.json();
    return posts;
}

export default async function SinglePostData ({params}) {
    //here params return a promise. so tha we can get the id dynamically.

    const user  = await params;
    const singlePost = await getSinglePost (user.id);

    return (

        <div className="">

            <h1 className="text-2xl font-bold">ID: {singlePost.id}</h1>
            <h1 className="text-2xl font-bold">Title: {singlePost.title}</h1>
            <h1><b>Description:</b> {singlePost.body}</h1>

        </div>
    )
}