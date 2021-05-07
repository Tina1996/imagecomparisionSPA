import React from 'react'

function ComparisionTable({element}) {
    return (
        <tr>
            <td>
                <img className="tableImg" src={element.thumbnailUrl} alt="thumbnailImage"/>
            </td>
            <td>{element.id}</td>   
            <td>{element.url}</td>   
            <td>{element.title}</td>   
        </tr>
    )
}

export default ComparisionTable
