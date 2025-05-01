import Image from 'next/image'
import error from '../public/Error.jpg'
import Link from 'next/link'


export default function NotFound () {
    return (
        <div className="h-screen">
            <h1>404 Page</h1>
            <h1>Not Found Page</h1>
            <Image src={error} alt='error image'></Image>
            <Link href="/">Back To Homepage</Link>
        </div>
    )
}