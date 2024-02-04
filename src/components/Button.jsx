import React from 'react'

const Button = ({text, aditionalClass}) => {
  return (
    <button className={`px-6 py-2 text-white bg-grn hover:bg-grn/85 rounded-full ${aditionalClass}`}> {text} </button>
  )
}

export default Button