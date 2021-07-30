import React, { useState, useEffect } from "react";

const Main = () => {
  const [res, setRes] = useState("");
  const apidata = async () => {
    const responce = await fetch("/nodejs");
    const data = await responce.json();
    console.log(data);
    setRes(data);
  };

  useEffect(() => {
    apidata();
  }, []);
  return (
    <>
      <h1>hi</h1>
      <h1>{res}</h1>
    </>
  );
};

export default Main;
