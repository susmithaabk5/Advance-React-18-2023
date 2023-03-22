const heading = React.createElement("h1", { id: "heading" }, "hello sush");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am parent:child:h1"),
    React.createElement("h2", {}, "i am parent:child:h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
