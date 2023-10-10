import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
export let Homepage=()=>
{
    return( 
        <>
            <Navbar bg='success' expand='lg'>
                <NavbarBrand href='https://en.wikipedia.org/wiki/Pushpa:_The_Rise'>PushpaFlower</NavbarBrand>
                <NavbarToggle aria-controls='#mynavbar'></NavbarToggle>
                <NavbarCollapse id='mynavbar'>
                    <Nav>
                        <Nav.Link href='/ternary1'>TernaryOperator</Nav.Link>
                        <Nav.Link href='/usestate1'>UseState</Nav.Link>
                    </Nav>
                </NavbarCollapse>

            </Navbar>
        </>
    );
}