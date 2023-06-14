import React from 'react'

const Button = ({children, onClick, id, type, disabled, loading}) => {

  // const [loading, setLoading] = React.useState(false)

  return (
    <button 
      type={type}
      className='btn-yellow'
      onClick={onClick}
      id={id}
      // onClick={()=> {setLoading(!loading)}}
      disabled={disabled}
    >
      {
        loading ? 
        <span className="loading"></span>
        :
        children
      }
    </button>
  )
}

export default Button