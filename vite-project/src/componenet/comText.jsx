import React from 'react'

function ComText(props) {
  return (
    <>
      <div className="col-12 col6">
      <span className='p3 text-center'>{props.p}</span>
      <h1>{props.d}</h1>
      <p className='para'>{props.paragraph}</p>
    </div>
    </>
  )
}

export default ComText
