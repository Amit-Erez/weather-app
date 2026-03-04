import React from "react";
import Today from "./Today";
import Daily from "./Daily";
import Hourly from "./Hourly";

const Results = ({ className }) => {
return (
    <div className={`${className} grid grid-cols-[2fr_1fr] grid-rows-[2fr_1fr] gap-4 p-2`}>
        <Today className="col-1 row-1" />
        <Daily className="col-1 row-2" />
        <Hourly className="col-2 row-span-2" />
    </div>
);
};

export default Results;
