import Link from 'next/link';

export default function Navbar () {
    return (
        <div className="flex justify-center m-3">
            <ul className="flex justify-between w-1/2">
                <Link href= "/"><li>Home</li></Link>
                <Link href= "/Services"><li>Services</li></Link>
                <Link href= "/dashboard"><li>Dashboard</li></Link>
                
                
            </ul>
        </div>
        
    )
}