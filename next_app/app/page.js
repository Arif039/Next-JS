

import Image from 'next/image'

 

export default function Home() {
  return (
    <div className="text-center flex flex-col justify-center h-screen">
      <h2>This is Next JS Series</h2>
      <h2>Welcome to Next JS Series</h2>

      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w-00zDGFh6VtxNsOtRMeflVFF6GQunbMrA&s" alt='Error Page' width={300} height={300} className=''></Image>
    </div>
  );
}
