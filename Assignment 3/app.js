import React from "react";
import ReactDOM  from "react-dom/client";

let divcomponent=React.createElement('div',{className:"title"},[React.createElement('h1',{key:'1'},'H1 Heading tag'),React.createElement('h2',{key:'2'},'H2 Heading tag'),React.createElement('h3',{key:'3'},'H3 Heading tag')]);

const root=ReactDOM.createRoot(document.getElementById('root'));
// console.log(divcomponent)

let jsxdivelement=(
    <div>
        <h1>H1 heading element</h1>
        <h2>H2 heading element</h2>
        <h3>H3 heading element</h3>
    </div>
)
// console.log(jsxdivelement)
let Jsxfunction=({title})=>(
    <div className={title}>
    {jsxdivelement}
</div>
)
// root.render(divcomponent)

// root.render(jsxdivelement)

const Header=()=>{
    return (
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',padding:'0.45em'}}>
            <img style={{width:'50px',objectFit:'contain'}} src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            <input type="search"/>
            <span>😎</span>
        </div>
    )
}
console.log(<Jsxfunction />)
// root.render(<Jsxfunction title='title'/>)
root.render(<Header/>)