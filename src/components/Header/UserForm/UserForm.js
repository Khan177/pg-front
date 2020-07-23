import React, {useState} from "react";
import {
    Button,
    Menu,
    MenuItem,
    ListItemText,
    ListItemIcon,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {AvatarImg, BlockUser, Law, User, UserAvatar, UserInfo, UserName} from "./UserFormStyles";


export default function UserForm({name, surname, position, avatar}) {
    const [isProfileOpened, setIsProfileOpened] = useState(false);
    const openDropDown = (event) => {
        setIsProfileOpened(event.currentTarget);
    };
    const closeDropDown = () => {
        setIsProfileOpened(false);
    };
    return (
        <User>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={openDropDown}
            >
                <BlockUser>
                    <UserInfo>
                        <UserName>
                            {name}
                            {" " + surname}
                        </UserName>
                        <Law>{position}</Law>
                    </UserInfo>
                    <UserAvatar>
                        <AvatarImg src={avatar} alt=""/>
                    </UserAvatar>
                    <ArrowDropDownIcon/>
                </BlockUser>
            </Button>
            <Menu
                id="customized-menu"
                anchorEl={isProfileOpened}
                keepMounted
                open={Boolean(isProfileOpened)}
                onClose={closeDropDown}
                style={{top:"60px"}}
            >
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Профиль"/>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Настройки"/>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Выйти"/>
                </MenuItem>
            </Menu>
        </User>

    )
}
