import React from 'react'

const Button = (props) => {
  return (
    <Button style={{backgroundColor:props.color}}className='btn'>{props.text}</Button>
  )
}

export default Button