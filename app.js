import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "First Parent H1"),
    React.createElement("h2", {}, "First Parent H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Second Parent H1"),
    React.createElement("h2", {}, "Second Parent H2"),
  ]),
]);
console.log(heading);
const bookbykarthik = {};
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
