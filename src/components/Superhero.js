import { Card, Col, Container, Image, Row } from "react-bootstrap"
import antman from "../asset/image/superhero/antman.jpg"
import avenger from "../asset/image/superhero/avenger.jpg"
import batman from "../asset/image/superhero/batman.jpg"
import robinhood from "../asset/image/superhero/robinhood.jpg"
import spiderman from "../asset/image/superhero/spiderman.jpg"
import superman from "../asset/image/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={antman} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANTMAN</Card.Title>
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
                            <Image src={avenger} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGER</Card.Title>
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
                            <Image src={batman} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">THE BATMAN</Card.Title>
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
                            <Image src={robinhood} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ROBINHOOD</Card.Title>
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
                            <Image src={superman} alt="Dune Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title>
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

export default SuperHero