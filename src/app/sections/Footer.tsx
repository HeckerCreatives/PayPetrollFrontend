import React from 'react'

export default function Footer() {
  return (
    <footer className=" w-full text-white py-20 px-4 ">
        <div className=" flex flex-col items-center gap-4 w-full text-center text-sm">
          <img src="/logo.png" width={200} height={200} />

            <div className="flex items-center gap-6 text-gray-200 text-sm md:text-lg">
            <a href="#" className="hover:text-green-500">
                    Home
                    </a>
                    <a href="#pets" className="hover:text-green-500">
                    Pets
                    </a>
                    <a href="#gameplay" className="hover:text-green-500">
                    Gameplay
                    </a>
                    <a href="#faq" className="hover:text-green-500">
                    Faq
                    </a>
                    <a href="#news" className="hover:text-green-500">
                    News
                    </a>
            
            </div>
        <p className=" text-xs text-zinc-400">© 2023 Game Company. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
