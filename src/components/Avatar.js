import React from 'react'

const Avatar = (props) => {
  
  return (
    <div>
      <img src={props.x} alt="{props.company}" style={{"height" : "75%", "width" : "75%"}} />
    </div>
  )
}

export default Avatar
