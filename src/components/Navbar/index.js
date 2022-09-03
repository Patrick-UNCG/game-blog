import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
    
export default function NavBar(){
    return (
        <>
          <Nav>
            <NavMenu>
              <NavLink to="/gaming" activeStyle>
                Gaming
              </NavLink>
              <NavLink to="/sports" activeStyle>
                Sports
              </NavLink>
              <NavLink to="/wrestling" activeStyle>
                Wrestling
              </NavLink>
            </NavMenu>
          </Nav>
        </>
      );
}