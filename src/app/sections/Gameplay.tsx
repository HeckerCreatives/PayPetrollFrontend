import { Play } from 'lucide-react'
import React from 'react'

export default function Gameplay() {
  return (

    <div id='gameplay' className=' relative z-50 w-full flex items-center justify-center h-auto bg'>
        <section className="max-w-[1240px] w-full py-32 px-4">
            <h2 className="text-center text-3xl font-bold mb-8">Gameplay</h2>
            <div className="relative bg-white "
            style={{backgroundImage: "url(/assets/gameplay.png)", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
            >
                <div className="aspect-video relative flex items-center justify-center"
                
                >
                   <img src="/assets/playbtn.png" width={100} height={100} className=' relative z-40'/>
                </div>

                <div className=' absolute top-0 h-full w-full aspect-video bg-zinc-950/20 z-30'>

                </div>
            </div>
        </section>
    </div>
    
  )
}
