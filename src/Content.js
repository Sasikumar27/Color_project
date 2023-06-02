import React, { useState } from 'react'
import Square from './Square'
import  colorName  from 'colornames'

const Content = () => {

    const [Value, setValue] = useState('Empty value')
    const [isDark, setisDark] = useState(false)
    const [hexValue, sethexValue] = useState('')

    return(
        <main>
            <Square 
               Value={Value} 
               isDark={isDark}
               hexValue={hexValue}
            />
            <input className='colorname'
                type="text" 
                placeholder='Add color Name'
                autoFocus
                required
                onChange={(e) => {
                    setValue(e.target.value);
                    sethexValue(colorName(e.target.value));
                }}
            /> <br /><br />
            <button className='toggle'
            onClick={ ()=> setisDark(!isDark) }
            > Toggle Text Color
            </button>          

        </main>    
    )
}

export default Content