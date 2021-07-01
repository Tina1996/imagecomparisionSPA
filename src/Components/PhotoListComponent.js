import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Table } from 'react-bootstrap'
import PhotoCard from './PhotoCard'

import './all.css'
import ComparisionTable from './ComparisionTable'
import {useContext} from 'react'
 
function PhotoListComponent() {

    const [dataList,setDataList] = useState([])
    const [tableList,setTableList] = useState([])
    const [idList,setIdList] = useState([])

    useEffect(() => {
        //fetch data from url
        axios('https://jsonplaceholder.typicode.com/photos')
            .then(res=>{
                setDataList(res.data.slice(0,20))
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    //adding photo to table
    const addPhoto = (element) =>{
        setTableList([...tableList,element])
        setIdList([...idList,element.id])
    }

    //removing photo from table
    const removeFromTable = (id) => {
        const newData = tableList.filter(item => item.id !== id)
        const newId = idList.filter(item => item !== id)
        setTableList(newData)
        setIdList(newId)
    }

    return (
        <Container fluid>
            <Row className="cardRow">
                {dataList.map(element =>{
                    return <PhotoCard key={element.id} element={element} idList={idList} addPhoto={addPhoto} removeFromTable={removeFromTable} />
                })}
            </Row> 
            <Row className="tableRow">
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            <th colSpan="4">
                                Comparision Table
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>URL</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableList.length>0 
                            ? 
                            tableList.map(item =>{
                                return <ComparisionTable key={item.id} element={item} />
                            })
                            :
                            <tr>
                                <td colSpan="4">
                                    No data Added
                                </td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default PhotoListComponent
