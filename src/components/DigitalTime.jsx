import React, { useEffect, useState } from 'react'

const DigitalTime = () => {
    const [time,SeTime]= useState(new Date().toLocaleTimeString("en-US", { hour12: false }));
    useEffect(() => {  
        setInterval(()=>{
            SeTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
        },100);
        
     }, [time]);
  return (

    <div>
        {time}
    </div>
  )
}

export default DigitalTime