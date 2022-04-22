import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/imgs/Logo.png";
import { navbar } from "../../utils/navbar";
import {
  Container,
  ItemsGroup,
  LinkGroup,
  Link,
  SearchIcon,
  KorIcon,
  LogOutButton,
  LogoutIcon,
} from "./style";

const Navbar = () => {
  const [active, setActive] = useState("/home");
  return (
    <>
      <Container>
        <Container.Logo src={logo} />
        <LinkGroup>
          {navbar.map((value) => {
            return (
              <Link
                key={value.id}
                onClick={() => setActive(value.path)}
                active={active === value.path}
                to={value.path}
              >
                {value.title}
              </Link>
            );
          })}
        </LinkGroup>
        <ItemsGroup>
          <SearchIcon />
          <KorIcon />
          <LogOutButton>
            <LogoutIcon />
            Login
          </LogOutButton>
        </ItemsGroup>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
