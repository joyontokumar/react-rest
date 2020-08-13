import React, { useEffect, useState, Col } from 'react';
import PhotoItem from '../components/PhotoItem';
import Services from '../Services';
import { Container, Row } from 'react-bootstrap';


const HomeScreen = () => {
    const [photos, setPhotos] = useState(null);
    const fetchphoto = async () => {
        try {
            const response = await Services.getallphoto();
            setPhotos(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchphoto()
    }, [])

    if (!photos) {
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
        <div className="homeContainer">
            <Container>
                <Row>
                    {photos && photos.splice(0, 9).map(photoItem => (
                        <PhotoItem
                            key={photoItem.id}
                            id={photoItem.id}
                            title={photoItem.title}
                            thumbnailUrl={photoItem.thumbnailUrl} />
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen;
