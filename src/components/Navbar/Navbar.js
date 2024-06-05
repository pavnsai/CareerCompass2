import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

function Navbar() {
    const { user } = useAuthenticator((context) => [context.user]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log("coming")
        setIsAuthenticated(!!user);
    }, [user]);

    return (
        <Authenticator.Provider>
            <BootstrapNavbar expand="lg" className="custom-navbar">
                <Container>
                    <BootstrapNavbar.Brand>Career-Compass</BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <AuthStateComponent isAuthenticated={isAuthenticated} />
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </Authenticator.Provider>
    );
}

const AuthStateComponent = ({ isAuthenticated }) => {
    const { signOut } = useAuthenticator((context) => [context.signOut]);

    return (
        <Nav>
            {isAuthenticated ? (
                <button className="logout-button" onClick={signOut}>
                    Logout
                </button>
            ) : (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <button as={Link} to="/login"
                            className="login-button">
                        Start
                    </button>
                </Link>
            )}
        </Nav>
    );
};

export default Navbar;
