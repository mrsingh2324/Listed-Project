import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faGauge,
  faThumbsUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Chart from './Chart';


const Right = () => {
  return (
    <div className="p-4 sm:ml-64 ">
      <Navbar />
      <div className="p-4 ">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center h-24 rounded   ">
            <Card
              color="#bcf2d6"
              head="Total Revenues"
              cost="2,129,430"
              icons={faGauge}
            />
          </div>
          <div className="flex items-center justify-center h-24 rounded  ">
            <Card
              color="#f4e5c1"
              head="Total Transactions"
              cost="1520"
              icons={faTags}
            />
          </div>
          <div className="flex items-center justify-center h-24 rounded ">
            <Card
              color="#EFDADA"
              head="Total Likes"
              cost="9721"
              icons={faThumbsUp}
            />
          </div>
          <div className="flex items-center justify-center h-24 rounded   ">
            <Card
              color="#DEE0EF"
              head="Total Users"
              cost="892"
              icons={faUserGroup}
            />
          </div>
        </div>

        <div className="flex items-center justify-center h-70 mb-4 rounded  graph">
          <Chart />
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-4 ">
          <div className="flex items-center justify-center rounded ">
            <Card2 />
          </div>
          <div className="flex items-center justify-center rounded ">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
