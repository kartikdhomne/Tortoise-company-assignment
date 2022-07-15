import React from 'react'

const Button = (props) => {
  return (
    <>
        <button
            className="btn"
            type="button"
            onClick={() => {
                props.isActive  ? props.reset() : props.start()
            }}
        >
            {props.isActive ? 'Reset' : 'Start'}
        </button>
    </>
  )
}

export default Button