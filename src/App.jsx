/* eslint-disable react/jsx-key */
import { useState } from "react";
import SideBar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const [sideBar, setSideBar] = useState(false);
  const [age] = useState(23);
  const [data] = useState([
    {
      title: "title one",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title two",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
  ]);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className="container">
        <Button handleSideBar={handleSideBar}></Button>
        {sideBar === true ? <SideBar /> : null}
        <PersonalInfo age={age} />
        {data.map((item, index) => (
          <Card index={index} title={item.title} description={item.description} />
        ))}
        {/* {sideBar && (
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Log in</p>
          </div>
        )} */}
      </div>
    </>
  );
};
export default App;
