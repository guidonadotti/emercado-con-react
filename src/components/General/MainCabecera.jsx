import React from 'react'

const MainCabecera = ({titulo="",children=""}) => {
    return (
      <div className="text-center p-4">
        <h1>{titulo}</h1>
        <p className="lead">{children}</p>
      </div>
    )
  }
  
  export default MainCabecera