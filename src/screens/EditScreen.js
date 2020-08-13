import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Control, Button, Container } from 'react-bootstrap';
import Services from '../Services';

const EditScreen = ({ match: { params } }) => {

    const photoId = params.id
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const loadPhoto = async () => {
        try {
            const response = await Services.editPhoto(photoId)
            const photo = response.data;
            console.log(photo)
            setPhotoTitle(photo.title)
            setPhotoUrl(photo.thumbnailUrl)
        } catch (error) {
            alert('failed to get photo')
        }
    }
    useEffect(() => {
        loadPhoto()

    }, [])

    const handleSubmit = async () => {
        try {
            if (!photoTitle || !photoUrl) {
                alert('title or photo url is required')
                return
            }
            const photo = {
                photoTitle,
                photoUrl,
                photoId
            };
            const a = await Services.updatePhoto(photo);
            console.log(a);
            alert("photo updated succefully !!")

        } catch (error) {
            console.log(error);
            alert("photo not updated !!", error)
        }
    }

    if (!photoTitle || !photoUrl) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="loading-content d-flex justify-content-center">
                            <p>loading data .....</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="add-screen">
                        <Form>

                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Photo  Title" onChange={e => setPhotoTitle(e.target.value)} value={photoTitle} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="text" placeholder="http://www.example.com/photo.jpg" onChange={e => setPhotoUrl(e.target.value)} value={photoUrl} required />
                            </Form.Group>

                            <Form.Group>
                                <Button onClick={handleSubmit} variant="primary" className="btn btn-sm">Update Photo</Button>
                            </Form.Group>


                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default EditScreen;

