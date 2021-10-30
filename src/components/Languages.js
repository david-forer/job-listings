import React from 'react'
import './languages.css'

const Languages = (props) => {
  
  return (
    <div>
       <p className="languages">{ props.item.languages.map((i, index)=><button key={index} className="btn">{i}</button>)}
            </p>
          
    </div>
  )
}

export default Languages
