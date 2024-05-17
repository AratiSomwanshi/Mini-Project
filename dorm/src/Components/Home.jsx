

import { Container } from "react-bootstrap";
import { Header } from "./Header";

export function Home(){
    return (
        <Container>
            <Header title="Welcome to Booking App" description="Your Stay. Your Way.." />
        </Container>
    )
}