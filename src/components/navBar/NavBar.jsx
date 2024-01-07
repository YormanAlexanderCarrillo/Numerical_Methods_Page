import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react'

const NavBar = () => {
    return (
        <div className='flex justify-center pr-10 ' >
            <div >
                <Navbar className='sticky'>
                    <NavbarContent className=' sm:flex gap-4 ' justify='center' >
                        <NavbarItem>
                            <Link as={NavLink}  color='danger'  to="/puntofijo">Punto Fijo</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link as={NavLink} color='danger'  to="/biseccion" >Bisección</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link as={NavLink} color='danger'  to="/newtonRaphson" >Newton Raphson</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link as={NavLink} color='danger'  to="/secante" >Secante</Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>

        </div>
    )
}

export default NavBar