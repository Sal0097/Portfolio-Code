import React from "react";
import MunnarPic from "./assets/MunnarPic.jpg";

function Main(){
    return(
        <div id="home">
            
            <div className="place-items-center my-20">
                <img src={MunnarPic} width={400} height={800} alt="Profile Pic" className="drop-shadow-xl ... rounded-lg ... "/>
            </div>
            <div className="place-items-center">
                <h4 className="font-mono ... text-[#c9d440] font-semibold ... text-xl">
                    Hi Welcome to my 
                </h4>
                <h4 className="font-mono ... text-slate-400 hover:text-sky-400 text-2xl ... font-bold ...">
                    Portfolio Website❤️
                </h4>
            </div>
        </div>
       
    );
}
export default Main;