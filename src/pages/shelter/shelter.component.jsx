import React from 'react';
import {ShelterList} from "../../components/shelter-list/shelter-list.component";

 export class ShelterPage extends React.Component {
    constructor() {
  super();
      this.state = {
        shelters:[],
      };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users=>this.setState({shelters:users})) 
    };
    render() {
        const {shelters} = this.state;
        return (
            <div>  <ShelterList shelters={shelters}></ShelterList> </div>
        )
 }  
 }