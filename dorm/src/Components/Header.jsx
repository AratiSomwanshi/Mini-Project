

import { Alert, Container } from "react-bootstrap";

export function Header(props) {
    return (
        <Container className="mt  width=100%" >
            <Alert variant="success"><h5>{props.title}</h5></Alert>
            <p>{props.description}</p>
        </Container>
    )
}