import React, { useState } from 'react';
import { Row, Col, Form, Control, Button, Container } from 'react-bootstrap';
import Services from '../Services';

const AddScreen = () => {

    const [photoTitle, setPhotoTitle] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = async () => {
        try {
            if (!photoTitle || !photoUrl) {
                alert('title or photo url is required')
                return
            }
            const photo = {
                photoTitle,
                photoUrl
            };
            const a = await Services.addPhoto(photo);
            console.log(a);
            alert("photo added succefully !!")

        } catch (error) {
            console.log(error);
            alert("photo not added !!", error)
        }
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
                                <Button onClick={handleSubmit} variant="primary" className="btn btn-sm">Add</Button>
                            </Form.Group>


                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AddScreen
