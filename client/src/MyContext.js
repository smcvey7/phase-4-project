import React, { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({children}){
  const [camper, setCamper] = useState(null);
  const [activities, setActivities] = useState(null);

  const contextValues = {
    camper,
    setCamper,
    activities,
    setActivities
  };

  return(
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext;