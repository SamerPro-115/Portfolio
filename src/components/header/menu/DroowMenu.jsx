import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";



const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar >
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;