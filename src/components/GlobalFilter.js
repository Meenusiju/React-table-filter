import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
    return (
        
            <div className="search-box" >
                  {''}
                <input className="task-input" 
                       placeHolder="Search..."
                       value={filter || ''}
                       onChange={(e) => setFilter(e.target.value)} 
                       />
            </div>
        
    )
}

export default GlobalFilter
