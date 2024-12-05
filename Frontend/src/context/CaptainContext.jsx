import React, { createContext, useState } from 'react'
export const CaptainDataContext= createContext();

const CaptainContext = ({children}) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading,setIsLoading]=useState(false);
  const [error, setError] = useState(null);
  const updateCaptain=(captainData)=>{
    setCaptain(captainData)
  }
  const value={
    captain,
    isLoading,
    error,
    updateCaptain,
    setCaptain,
    setIsLoading,
    setError


  }
  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext


// import React from 'react'

// const CaptainContext = ({children}) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default CaptainContext
