// Episode 1- Inception

// hello world using React
//react element is nothing but javascript objects

// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "hello World");                                 //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//now i wanna make nested div html structure like below using react

// //<div id="parent">
//    <div id="child">
//      <h1>i am h1 tag</h1>
//    </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// now if you wanna make one more sinbling to h1 like

/* <div>
<h1>i am h1 tag</h1>
<h2>i am h2 tag</h2>
</div> */

// just use array of children []
// if already there is h1 so it will be replaced by h1 by render method

// Advantages of react
// 1. not all libarary apart from react can be applied to exietance app , we can use it for even small portion of the application
// 2.its a small js library we can import it using cdn links into our code
// 3.framework come up with lots of baggage with it react doesnt