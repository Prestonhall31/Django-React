import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Home() {
  return  <p>This is the homepage</p> 
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }



render() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<RoomJoinPage/> } /> 
        <Route path="/create" element={<CreateRoomPage/>} /> 
        <Route path="/room/:roomCode" component={Room} />
        <Route path="/room/:roomCode" component={Room} />
      </Routes> 
    </Router> 
    ); 
  }
}