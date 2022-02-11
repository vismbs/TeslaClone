import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="images/svgexport-5.svg" width="120px"></img>
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true);
          }}
        ></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose
          onClick={() => {
            setBurgerStatus(false);
          }}
        ></CustomClose>
        <li>
          <a href="#">Model S</a>
        </li>
        <hr />
        <li>
          <a href="#">Model 3</a>
        </li>
        <hr />
        <li>
          <a href="#">Model X</a>
        </li>
        <hr />
        <li>
          <a href="#">Model Y</a>
        </li>
        <hr />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <hr />
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <hr />
        <li>
          <a href="#">Trade-in</a>
        </li>
        <hr />
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <hr />
        <li>
          <a href="#">Roadster</a>
        </li>
        <hr />
        <li>
          <a href="#">Semi</a>
        </li>
        <hr />
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <hr />
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <hr />
        <li>
          <a href="#">Utilities</a>
        </li>
        <hr />
        <li>
          <a href="#">Test Drive</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = Styled.div`
  min-height: 60px;
  position: fixed;
  justify-content: space-between;
  display: flex;
  padding: 15px 45px;
  top:0;
  left:0;
  right:0;
  z-index: 1;
`;

const Menu = Styled.div`
display: flex;
p{
  padding: 0px 10px;
  flex-wrao: no-wrap;
}
justify-content: center;
flex: 1;

@media (max-width: 768px) {
  display: none;
}
`;

const RightMenu = Styled.div`
display: flex;
`;

const CustomMenu = Styled(MenuIcon)`
cursor: pointer; 
`;

const CustomClose = Styled(CloseIcon)`
cursor: pointer; 
margin-left: auto;
`;

const BurgerNav = Styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: left;
li {
  padding: 10px 0px;

  a {
    font-weight: 600;
  }
}
display: ${(props) => (props.show ? "hidden" : "none")}
`;
