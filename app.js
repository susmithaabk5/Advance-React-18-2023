import React from "react";
import ReactDOM from "react-dom/client";
const InsideComponent = () => (
  <div>
    <h1>can u see me i am inside</h1>
  </div>
);

const FirstComponent = () => {
  return (
    <div>
      <h2>Make in cool</h2>
      <InsideComponent /> {{ text: "text" }}
      {console.log(InsideComponent)}
      <ul>
        <li>Relax</li>
        <li>Mediate</li>
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);
