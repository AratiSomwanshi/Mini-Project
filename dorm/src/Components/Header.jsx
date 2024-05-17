


import { Alert, Container } from "react-bootstrap";

export function Header(props) {
    return (
        <Container className="mt">
            <Alert variant="success" className="massage"><h5 className="head">{props.title}</h5></Alert>
            <p>{props.description}</p>
        </Container>
    )
}