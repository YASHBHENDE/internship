import React from "react";
import DeviceIdentifier from "react-device-identifier";

import DisplayDesktop from "./desktop";

function Display(){
    <DeviceIdentifier isDesktop={true}>
        <DisplayDesktop />
      </DeviceIdentifier>
}
    
  
export default Display;