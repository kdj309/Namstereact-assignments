import React from "react";
import  ReactDOM  from "react-dom/client";

//?React.createElement is the core way to create elements 
//*React createElement=> Javascript Object=> HTML Element
let heading=React.createElement('h1',{id:"heading"},"Namste React ❤");

//!But using React.createElement for complex HTML structure is not developer friendly so React team thought of creating the html extention/javascript syntactic extention which underhood converted into React.createElement calls by Javascript transpilers such as Babel but they are easier to write and developer friendly syntax to write HTML Elements . JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's NOT a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript. 


let root=ReactDOM.createRoot(document.getElementById('root'));

let anotherroot=ReactDOM.createRoot(document.getElementById('root2'))
//?We can create multiple root by providing different element if we give the same element it will consider the first root.render mehtod
//? JSX is not only used in React also in VUE but how means for JSX transpilation Babel uses react-jsx-plugin for vue vue-jsx-plugin 

//* JSX=> with the help of (Babel) React createElement => Javascript Object => HTML Element
//* In JSX we can't use class becuase class is resrved keyword for ecma script instead we use className for major attributes in JSX we use camelCase like tabIndex ,htmlFor etc. The Main Power of JSX it enables to write executable javascript within HTML element inside {} and it it is more then one line then it need's to encapsulate inside ()

let jsxheading=<h2 id="jsxheading">Hello JSX</h2>

/*
* Both are Javascript Objects console.log(heading);
* Both are Javascript Objects console.log(jsxheading);
*/

//? React components : There are two types of compoents Functional component and class based component .components means a group of JSX returned by a function / class

const Nav=()=>(
    <div>
        <ul>
            <li>Home</li>
            <li>Signup</li>
            <li>About</li>
        </ul>
    </div>
)
//* Nav is functional component which returns the JSX which can be used to render inside another component / JSX element 

//* Class based components are the old ways of writing components by extending React.Component class which adds the power to use it as a component 

//* We Can write Components using arrow functions or using function keyword

//*We can call Components in three ways babel understands all of these and convert it into React.createElement 

//* JSX comes with barrier that is we can't write two JSX Parents we need one parent wrap childrens inside it because react.createElement creates it's child with single parent if it returning by component then component name should start with Uppercase and style attribute must be defined as an object
//! Nav(),<Nav></Nav>,<Nav/>
//! If we call root.render with the same root multiple times it will execute last render method

/*
* all will work root.render(<Nav></Nav>)
* all will work root.render(Nav())
* all will work root.render(<Nav/>)
*/
root.render(jsxheading)
// root.render(Nav())
// root.render(<Nav/>)
anotherroot.render(<Nav/>)
