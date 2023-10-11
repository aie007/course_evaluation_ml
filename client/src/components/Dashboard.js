// import React, { useEffect, useRef } from 'react';
// const {tableau} = window;
// export const Tableau =()=> {
//   const ref = useRef(null);
//   const url =  "https://public.tableau.com/views/FacultyDashboard1/FacultyDashboard?:language=en-US&:display_count=n&:origin=viz_share_link";
//   function initViz(){
//     tableau.Viz(ref.current,url);
//   }
//   return (
//     <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
//   );
// }



import React, { Component } from "react";

class Dashboard extends Component {
    componentDidMount() {
        var divElement = document.getElementById('viz1696989790117');                    
        var vizElement = document.getElementById('tableauViz');                    
        // if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1709px';vizElement.style.height='931px';} 
        // else if ( divElement.offsetWidth > 500 ) {
            vizElement.style.position = 'relative';
             vizElement.style.width='990px';
             vizElement.style.height='835px';
            // } 
        // else { vizElement.style.width='100%';vizElement.style.height='2027px';}                     
        var scriptElement = document.createElement('script');                    
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';            
        vizElement.parentNode.insertBefore(scriptElement, vizElement);               
    }
    render() {
        return (
            <div className='tableauPlaceholder' id='viz1696990346042'>
                <noscript>
                    <a href='/courses'>
                        <img alt='Faculty Dashboard' src='https://public.tableau.com/static/images/Fa/FacultyDashboard1/FacultyDashboard/1_rss.png' />
                    </a>
                </noscript>
                <object className='tableauViz' id='tableauViz' >
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F'/> 
                    <param name='embed_code_version' value='3' /> <param name='site_root' value='' />
                    <param name='name' value='FacultyDashboard1&#47;FacultyDashboard' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fa&#47;FacultyDashboard1&#47;FacultyDashboard&#47;1.png' /> 
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                </object>
            </div>          
        );
    }
}

export default Dashboard;