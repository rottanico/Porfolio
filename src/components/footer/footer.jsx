import React from 'react';
import { SiRedux, SiReact, SiNodeDotJs,SiMongodb , SiPostgresql,SiGithub,SiSass } from 'react-icons/si'
import {BsBootstrap}  from 'react-icons/bs'
import{IconContext} from 'react-icons'


const Footer = function () {
const array=[<SiRedux/>, <SiReact/>, <SiNodeDotJs/>,<SiMongodb/> , <SiPostgresql/> ,<SiGithub/>,<SiSass/>,<BsBootstrap/>]
    
    return (<div class='d-flex bg-gradient-dark ' >{

    array.map(el=>{
        return(<div class='mr-auto p-3'>
                    <IconContext.Provider value={{ size:'2em',style: { color: '#a4161a' } }}>
                        {el}
                    </IconContext.Provider>
                </div>)
    })
                
               
    }</div>)

}

export default Footer;