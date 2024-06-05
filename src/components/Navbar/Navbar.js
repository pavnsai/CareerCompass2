import React, { useEffect, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth"

function Navbar() {
    const { user } = useAuthenticator((context) => [context.user]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
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
    const navigate = useNavigate();

    async function signingOut() {
        try {
            await signOut();
            navigate('/login');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    }
    return (
        <Nav>
            {isAuthenticated ? (
                <button className="logout-button" onClick={signingOut}>
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
