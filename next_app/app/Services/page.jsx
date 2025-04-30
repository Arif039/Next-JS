"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Services () {
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

    const router = useRouter();
    const isLoggedIn = true;
    const handaleWebNavigation = () => {
        if (isLoggedIn) {
            router.push("/Services/WebDev");
        }else {
            router.push("/");
        }
    }

    const handaleAppNavigation = () => {
        router.push("/Services/AppDev");
    }

    return (
        <div className="h-screen">
            <h1>This is Services Page</h1>
            <p>We have more pages comming</p>

            <div className=" flex flex-col gap-4">

            {data.map((d) => {
                        return (
                            <div >
                                <Link href={`/Services/${d._id}`} >
                                    <button className="bg-blue-400 p-2 cursor-pointer">{d.name}</button>
                                </Link>
                            </div>
                        )
                    
                })}


            </div>
              
                
        </div>


        
    )
}