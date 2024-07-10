import React, {useState, useEffect} from 'react'


const ProgressBar = () => {
    const [filled, setFilled] = useState(0)
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        if(filled < 80 && loading){
            console.log('yes')
            setTimeout(() => {
               setFilled(prev => prev += 5)
            }, 50)
        }
    }, [filled,loading])

   return (
    <>
    <div className='rounded-[8px] bg-slate-300 relative h-[10px]'>
       <div className={`bg-white absolute z-10 h-full rounded-[8px] transition-[width] duration-500`} style={{width: `${filled}%`}} />
    </div>
    </>
   )
}

export default ProgressBar