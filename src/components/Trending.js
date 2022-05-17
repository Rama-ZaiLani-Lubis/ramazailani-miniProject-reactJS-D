import { Card, Col, Container, Image, Row } from "react-bootstrap"
import desaPenari from "../asset/image/tranding/desaPenari.jpg"
import dearNathan from "../asset/image/tranding/dearNathan.jpg"
import doctorStranger from "../asset/image/tranding/doctorStranger.jpg"
import joker from "../asset/image/tranding/joker.jpg"
import spiderman from "../asset/image/tranding/spiderman.jpg"
import theNorthman from "../asset/image/tranding/theNorthman.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={desaPenari} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">KKN DESA PENARI</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={dearNathan} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DEAR NATHAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={doctorStranger} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DOCTOR STRANGER</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={joker} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JOKER</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spiderman} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={theNorthman} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE NORTHMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                             </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </div> 
    )
}

export default Trending