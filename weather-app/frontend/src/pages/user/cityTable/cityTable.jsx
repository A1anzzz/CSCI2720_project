//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
    const data = props.data;
    const [tableData, setTableData] = useState(data);
   
    const columns = [
     { label: "City Name", accessor: "name", sortable: true },
     { label: "Latitude", accessor: "lat", sortable: true },
     { label: "Longitude", accessor: "lon", sortable: true },
     { label: "Tempreatrue", accessor: "temp_c", sortable: true },
     { label: "Weather", accessor: "weather", sortable: false },
    ];

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
             return (
              a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
               numeric: true,
              }) * (sortOrder === "asc" ? 1 : -1)
             );
            });
            setTableData(sorted);
           }
       };
   
    return (
     <>
      <table className="table">
       <caption>
       </caption>
       <TableHead columns={columns} handleSorting={handleSorting}/>
       <TableBody columns={columns} tableData={tableData} />
      </table>
     </>
    );
   };
   
   export default Table;