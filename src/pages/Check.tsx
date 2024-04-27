import React from 'react'

function Check() {

    function handleClick(){
        console.log("hey from check") ; 
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
    </div>
  )
}

export default Check