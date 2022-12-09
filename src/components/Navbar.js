import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Button }from "../styles";


function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="homepage">Home</Nav.Link>
                    <Nav.Link href="forum">Forum</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                    <Nav.Link href="contactus">Contact Us</Nav.Link>
                    <Button variant="outline" onClick={handleLogoutClick}>
                        Logout
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;