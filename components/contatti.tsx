"use client"

import FormContatti from "./FormContatti";
import {motion} from "framer-motion";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapLocationDot
} from "@fortawesome/free-solid-svg-icons";


export default function Contatti () {



    return (
    
    <div id="contatti" className="w-full p-4 align-middle
    items-center gap-4">

    
    <motion.div 
    initial={{opacity:0, x:50,}}
    whileInView={{ opacity: 1,translateX:-50,  transition:{duration:.5} }}
    exit={{ opacity: 1, translateX:-10 }}
    viewport={{ once: true, amount: 0.5 }}
    className="card col-span-2 shadow-xl pl-5 pr-5 lg:pl-20 lg:pr-20 p-10 mx-auto form-control w-full">
        
      <FormContatti/>

    </motion.div>
    
  </div>
  

    )
    
}