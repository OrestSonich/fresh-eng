import React, { useEffect } from 'react'
import '../styles/app.pagination.scss'

const AppPaginationsDots = ({count, active}) => {
    const elements = []
        for (let i = 0; i < count; i++){
            elements.push(
                <div key={i} className={i===0? 'element element-active' : 'element'}></div>
            )}
    return (
        <div className='pagination'>
            {elements}
        </div>
    )
}

export default AppPaginationsDots