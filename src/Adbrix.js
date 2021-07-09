import React, { useState, useEffect } from "react";
import { Text, View, Platform } from "react-native";
import AdbrixRm from "./Adbrix-Local";

AdbrixRm.startAdbrixSDK('dW6eSX9fbk2r0Rr4KJIQ0A', 'tkBFgB2bOUK0L0Jo9FKqyw');  
  
const Adbrix = () => {   

    useEffect(() => {      
      AdbrixRm && AdbrixRm.event("RN_OpenApp");
    }, []);
    
    return(<></>);   
}

export default Adbrix;