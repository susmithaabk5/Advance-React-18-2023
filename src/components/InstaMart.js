import React, { useState } from "react";

const Inner = ({ title, description, isExpanded, setIsExpanded }) => {
  return (
    <div className="border bg-slate-300 border-black rounded-xl focus:ring-4 focus:ring-gray-200 shadow-2xl">
      <h1
        className="font-bold bg-orange-500 pl-2 rounded-t-xl p-2 cursor-pointer"
        onClick={() => setIsExpanded(title)}
      >
        {title} {isExpanded ? "[-]" : "[+]"}
      </h1>
      {isExpanded && <p className="pl-2 ">{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("Details");
  const toggableSection = (title) => {
    setVisibleSection((prevvisibleSection) =>
      prevvisibleSection === title ? null : title
    );
  };
  return (
    <div className="p-2 m-2 ">
      <h2 className="font-bold ">Instamart</h2>
      <Inner
        title={"Details"}
        description={
          "Instacart is an American delivery company that operates a grocery delivery and pick-up service in the United States and Canada.[5] The company offers its services via a website and mobile app. The service allows customers to order groceries from participating retailers with the shopping being done by a personal shopper"
        }
        isExpanded={visibleSection === "Details"}
        setIsExpanded={toggableSection}
      />
      <Inner
        title={"Policy"}
        description={
          "Instacart is an American delivery company that operates a grocery delivery and pick-up service in the United States and Canada.[5] The company offers its services via a website and mobile app. The service allows customers to order groceries from participating retailers with the shopping being done by a personal shopper"
        }
        isExpanded={visibleSection === "Policy"}
        setIsExpanded={toggableSection}
      />
      <Inner
        title={"Members"}
        description={
          "Instacart is an American delivery company that operates a grocery delivery and pick-up service in the United States and Canada.[5] The company offers its services via a website and mobile app. The service allows customers to order groceries from participating retailers with the shopping being done by a personal shopper"
        }
        isExpanded={visibleSection === "Members"}
        setIsExpanded={toggableSection}
      />
    </div>
  );
};

export default InstaMart;
