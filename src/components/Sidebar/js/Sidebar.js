import { Avatar } from "@mui/material";
import { KeyboardArrowLeft } from "@material-ui/icons";
// import { KeyboardArrowDown } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { WatchLaterOutlined } from "@material-ui/icons";
import { Settings } from "@material-ui/icons";
import React, { useState } from "react"; 

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__settings">
            <Avatar className="sidebar__avatar" src="https://placedog.net/640/480?random"/>
            <h3>Ayaan Khan's Notion</h3>
            {/* <KeyboardArrowDown className="sidebar__KeyboardArrowDown" /> */}
            <KeyboardArrowLeft className="sidebar__KeyboardArrowLeft" />
        </div>
    </div>
  )
}

export default Sidebar;