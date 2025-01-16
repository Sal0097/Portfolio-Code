import React from "react";
import dark_mode_icon from "./assets/dark_mode_icon.png"
function Navbar() {
    return(
            <nav className="backdrop-blur-sm bg-white/30 ... flex-wrap fixed top-0 left-0 right-0 z-50 ">
            <div className="flex space-x-20 ... p-4 ...  ">
            <a href="#home"><button className="bg-cyan-450 hover:bg-cyan-500 rounded-lg p-1 ...">About me </button></a>
            <a href="#skills"><button className="bg-cyan-450 hover:bg-cyan-500 rounded-lg p-1 ..." >Skills </button></a>
            <a href="#projects"><button className="bg-cyan-450 hover:bg-cyan-500 rounded-lg p-1 ..." >Projects </button></a>
            <a href="#contact"><button className="bg-cyan-450 hover:bg-cyan-500 rounded-lg p-1 ...">Contact me </button></a>
            <button id="mode"><img src={dark_mode_icon} height={10} width={20} ></img></button>
            {/* <script>
                const mode = document.querySelector("#mode");
                let currentMode="Dark";
                modeEvent=()=>{
                    if(currentMode=="Dark"){
                        currentMode=="Light";
                        document.body.style.background
                    }
                }
            </script> */}
            </div>
            
        </nav>
        
    )
}
export default Navbar