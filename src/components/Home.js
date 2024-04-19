import React, { useEffect, useState } from "react";
import Jsondata from "../constants/ApiData";
import CalculateData from "../constants/Utils";
import TableData from "./Table";

const Home = () => {
  const [flavanoidClass1, setFlavanoidClass1] = useState(null);
  const [flavanoidClass2, setFlavanoidClass2] = useState(null);
  const [flavanoidClass3, setFlavanoidClass3] = useState(null);

  const [gama1Details, setGama1Details] = useState(null);
  const [gama2Details, setGama2Details] = useState(null);
  const [gama3Details, setGama3Details] = useState(null);

  useEffect(() => {
    handleClassesData();
  }, []);

  const handleClassesData = () => {
    const filteredClass1 = Jsondata.filter((itm) => itm.Alcohol === 1);
    const filteredClass2 = Jsondata.filter((itm) => itm.Alcohol === 2);
    const filteredClass3 = Jsondata.filter((itm) => itm.Alcohol === 3);

    const flavanoidsarr1 = filteredClass1.map((item) =>
      Number(item.Flavanoids)
    );

    const flavanoidsarr2 = filteredClass2.map((item) =>
      Number(item.Flavanoids)
    );
    const flavanoidsarr3 = filteredClass3.map((item) =>
      Number(item.Flavanoids)
    );

    const Gama1 = filteredClass1.map((item) =>
      parseFloat(((item.Ash * item.Hue) / item.Magnesium).toFixed(3))
    );

    const Gama2 = filteredClass2.map((item) =>
      parseFloat(((item.Ash * item.Hue) / item.Magnesium).toFixed(3))
    );

    const Gama3 = filteredClass3.map((item) =>
      parseFloat(((item.Ash * item.Hue) / item.Magnesium).toFixed(3))
    );

    setFlavanoidClass1(CalculateData(flavanoidsarr1));
    setFlavanoidClass2(CalculateData(flavanoidsarr2));
    setFlavanoidClass3(CalculateData(flavanoidsarr3));

    setGama1Details(CalculateData(Gama1));
    setGama2Details(CalculateData(Gama2));
    setGama3Details(CalculateData(Gama3));
  };

  return (
    <div className="main_container">
      {flavanoidClass1 && flavanoidClass2 && flavanoidClass3 && (
        <TableData
          measure="Flavonoids"
          stat1={flavanoidClass1}
          stat2={flavanoidClass2}
          stat3={flavanoidClass3}
        />
      )}

      {gama1Details && gama2Details && gama3Details && (
        <TableData
          measure="Gama"
          stat1={gama1Details}
          stat2={gama2Details}
          stat3={gama3Details}
        />
      )}
    </div>
  );
};

export default Home;
