import React from "react"
import {Shelter} from "../shelter/shelter.component"
import "./shelter-list.styles.scss"

export const ShelterList = props => (
 <div className="card-list">
     {props.shelters.map(shelter=>(
        <Shelter key={shelter.id} shelter={shelter}/>
        ))}
        </div>
)

