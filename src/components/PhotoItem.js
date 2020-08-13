import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import Services from '../Services';

const PhotoItem = ({ albumId, id, title, url, thumbnailUrl }) => {

    const deletePhoto = async (event) => {
        event.preventDefault();
        try {
            const dataId = await Services.deletePhoto(id)
            console.log(id);
            alert(`photo delete succefully ${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Col md="auto">
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to={`/edit/${id}`}>
                        <Button variant="primary" className="btn btn-sm" >Edit</Button>
                    </Link>

                    <Button onClick={deletePhoto} variant="danger" className="ml-2 btn btn-sm">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhotoItem
