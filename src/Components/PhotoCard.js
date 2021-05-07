import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './all.css'

function PhotoCard({element,idList,addPhoto,removeFromTable}) {
    
    return (
        <Card className="card">
            <Card.Img className="cardImg" src={element.thumbnailUrl} alt="thumbnailImage"></Card.Img>
            <Card.Body>
                <Card.Title className="cardTitle">{element.title}</Card.Title>
                <Card.Text>
                    {element.id}<br/> 
                    <a href={element.url}>URL</a>   
                </Card.Text>
                {
                    idList.includes(element.id)
                    ?
                    <Button variant="danger" onClick={()=>removeFromTable(element.id)}>Remove</Button>
                    :
                    <Button variant="primary" onClick={()=>addPhoto(element)}>Compare</Button>
                }
                
            </Card.Body>
        </Card>
    )
}

export default PhotoCard
