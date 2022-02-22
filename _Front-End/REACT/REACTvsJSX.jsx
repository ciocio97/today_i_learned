// 도대체 뭐가 문제임?
import React from "react";
import "./styles.css";

function App() {
  const user = {
    firstName: "React",
    lastName: "JSX Activity"
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  // JSX 없이 활용한 React
  return React.createElement("h1", null, `Hello, ${formatName(user)}!`);

  // JSX 를 활용한 React
  // return <h1>Hello, {formatName(user)}!</h1>;
}

export default App;