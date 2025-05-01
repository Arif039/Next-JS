import Image from 'next/image'
import error from '../../../public/Error.jpg'
import Link from 'next/link'

export default function ServiceDefaultPage ({params}) {
    const data = [
        {
            _id:"1",
            name:"Web Development Services",
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, exercitationem!"
        },

        {
            _id:"2",
            name:"App Development Services",
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, exercitationem!"
        }
    ]

    const id = params.id;
    const singleData = data.find((d) => d._id == id);
    
    if (singleData) {
        return (
            <div>
                <h1>Services Details Page</h1>
                <h3>ID: {id}</h3>
                <p>Name: {singleData.name}</p>
                <p>Description: {singleData.des}</p>
            </div>
        )
    } else {
        return (
            <div className="h-screen">
                <h1>404 Page</h1>
                <h1>Not Found Page</h1>
                <Image src={error} alt='error image'></Image>
                <Link href="/">Back To Homepage</Link>
            </div>
        )
    }

   
}
