import React from 'react';
import { SiRedux, SiReact, SiNodeDotJs, SiMongodb, SiPostgresql, SiGithub, SiSass,SiFreelancer } from 'react-icons/si'
// import { BsBootstrap } from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Footer = function () {
    const array=[ {img:<AiOutlineLinkedin/>,name:"Linkedin",url:"https://www.linkedin.com/in/nicolas-rotta/"},{img:<SiGithub/>,name:"Github",url:"https://github.com/rottanico"},{img:<SiFreelancer/>,name:"Freelancer",url:"https://www.freelancer.com.ar/u/rottanico7"}]
   return (<footer class="page-footer font-small cyan darken-3  bg-success">


        <div class="container ">


            <div class="row">


                <div class="col-md-12">
                    <div class=" d-flex flex-center">
                        {
                            array.map(el => {
                            return (<tag class='mx-auto p-3 justify-content-center '>
                                <a rel="noreferrer" href={el.url} target="_blank">
                                    <IconContext.Provider value={{ size: '2.5em', style: { color: '#a4161a', width: '90%', height: '90%' } }}>
                                        {el.img}
                                    </IconContext.Provider></a>
                            </tag>)
                        })
                    }
                   
                    </div>
                </div>


            </div>


        </div>



        <div class=" footer-copyright text-center py-3 ">© 2020 Copyright:
            <a href="https://porfolio-tau.vercel.app/"> https://porfolio-tau.vercel.app</a>
        </div>


    </footer>)
}
// const Footer = function () {
// const array=[{img:<SiRedux/>,name:"Redux", url:"https://es.redux.js.org/"}, {img:<SiReact/>,name:"React" ,url:"https://es.reactjs.org/"}, {img:<SiNodeDotJs/>,name:"Node", url:"https://nodejs.dev"},{img:<SiMongodb/>,name:"MongoDB",url:"https://www.mongodb.com/"} , {img:<SiPostgresql/>,name:"PostgreSQL",url:"https://www.postgresql.org"} ,{img:<SiGithub/>,name:"Github",url:"https://github.com/rottanico"},{img:<SiSass/>,name:"Sass" ,url:"https://sass-lang.com"},{img:<BsBootstrap/>,name:"Bootstrap",url:"https://getbootstrap.com"}]

//     return (<div class='d-flex bg-success justify-content-center' >{

//     array.map(el=>{
//         return(<tag class='mx-auto p-3 justify-content-center '>
//             <a rel="noreferrer" href={el.url} target="_blank">
//                     <IconContext.Provider value={{ size:'2em',style: { color: '#a4161a' , width:'90%',height:'90%'} }}>
//                         {el.img}
//                     </IconContext.Provider></a>
//                      </tag>)
//     })


//     }</div>)

// }

export default Footer;