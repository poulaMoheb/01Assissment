import React from 'react'

function Greeting(props) {
    return (
        <div>
            {props.currentUser?<h1>{`Hello ${props.currentUser.fstName} ${props.currentUser.lstName}`}</h1>:<h1>Hello World!!!</h1>}
        </div>
    )
}

export default Greeting