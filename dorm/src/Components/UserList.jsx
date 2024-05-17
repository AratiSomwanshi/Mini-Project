import { Container } from "react-bootstrap";


import { Header } from "./Header";


export function UserList(){
    return(
        <Container>
            <Header title="List of user" description="Here you can delete and edit the user" />
        </Container>
    )
}