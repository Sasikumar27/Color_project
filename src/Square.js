import React from 'react'


const Square = ( {Value, isDark, hexValue}) => {
    
  return (
        <section className='square'
           style={{
                backgroundColor: Value,
                color: isDark ? 'white' : 'black'
            }}  
        >
            {Value} <br />
            {hexValue}
        </section>
        
  )
}

export default Square