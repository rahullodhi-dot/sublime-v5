import React from 'react'
import {X} from "lucide-react"

interface TopBarProps {
  text?:string,
  showCloseBtn?: ()=>void
}
const TopBar = ({text, showCloseBtn}: TopBarProps) => {
  const displayText = text || "Sourced Sustainably from India's Farms!"
  return (
    <div className='w-full h-8 flex justify-center items-center px-4 bg-[#f1e4b0]'>
       <div className='ml-auto flex gap-2 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 9L16 5M12 14.5L15 11.5M18.5 8L16.875 9.625M12 19.5L13.875 17.625M19.5 12L15.75 15.75M12 22C16.418 22 20 18.354 20 13.857C20 9.395 17.447 4.187 13.463 2.326C13.0051 2.11143 12.5057 2.00014 12 2M12 22C7.582 22 4 18.354 4 13.857C4 12.271 4.323 10.591 4.917 9M12 22V2M12 2C11.5 2 11.001 2.109 10.537 2.326C8.936 3.074 7.567 4.362 6.5 5.926" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
        <p className="text-center text-sm font-light">{displayText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 9L16 5M12 14.5L15 11.5M18.5 8L16.875 9.625M12 19.5L13.875 17.625M19.5 12L15.75 15.75M12 22C16.418 22 20 18.354 20 13.857C20 9.395 17.447 4.187 13.463 2.326C13.0051 2.11143 12.5057 2.00014 12 2M12 22C7.582 22 4 18.354 4 13.857C4 12.271 4.323 10.591 4.917 9M12 22V2M12 2C11.5 2 11.001 2.109 10.537 2.326C8.936 3.074 7.567 4.362 6.5 5.926" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
       </div>
       <div className='self-end ml-auto'>
        <button onClick={showCloseBtn}>
          <X className='w-4 h-4 ml-4'/>
        </button>
       </div>
    </div>
  )
}

export default TopBar
