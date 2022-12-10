import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Button } from "../styles";


function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch(`football.up.railway.app/logout`, { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="forum">Forum</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                    <Nav.Link href="contactus">Contact Us</Nav.Link>
                    <div>
                        {user ? (
                            // <Button variant="outline" onClick={handleLogoutClick}>
                            //     Logout
                            // </Button>
                            <Nav.Link href="logout"><Button variant="outline" onClick={handleLogoutClick}>Log out</Button></Nav.Link>
                        ) : (
                    <>
                        {/* <Nav.Link to="/signup">Signup</Nav.Link>
                        <Nav.Link to="/login">Login</Nav.Link> */}
                    </>
                        )}
</div>
                    {/* <Nav.Link href="logout"><Button variant="outline" onClick={handleLogoutClick}>Log out</Button></Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;