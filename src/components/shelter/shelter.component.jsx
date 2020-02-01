import React from "react";
import "./shelter.component.scss"

export const Shelter = props =>  (
    <div className="menu-item">
    <h1 className="title">SHELTER</h1>
    <div className="background-image" >
      <img  alt="shelter" src={"https://appalachiantrail.org/images/default-source/explore-the-trail/thru-hiking/camp-and-shelter/deepgapshelter_lauriepotteiger.jpg?sfvrsn=ac7fb2a0_0&MaxWidth=600&MaxHeight=&ScaleUp=false&Quality=High&Method=ResizeFitToAreaArguments&Signature=245AFE3AF3335BA3CEB8D0A3487F5F6625DDF614"} />
     
     </div>
     <div className="content">
      <h2>{props.shelter.name}</h2>
      <div className="subtitle">
      <p>{props.shelter.email}</p>
      <p>{props.shelter.address.city}</p>
      </div>
      </div>
    </div>
)
export default Shelter;


