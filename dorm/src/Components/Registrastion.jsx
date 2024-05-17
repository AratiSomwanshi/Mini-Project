import { Container } from "react-bootstrap";
import { Header } from "./Header";

export function Registration(){
    return(//return ui header components take two props we apply multiple prop provied
        <Container>
            <Header title="Welcome to User Regisration" description="This is form to add a user"/>
           
        </Container>
    )
}