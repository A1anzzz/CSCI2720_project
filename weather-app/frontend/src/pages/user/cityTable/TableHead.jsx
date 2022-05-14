//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { useState } from "react";

const TableHead = ({ columns, handleSorting }) => {

const [sortField, setSortField] = useState("");
const [order, setOrder] = useState("asc");

const handleSortingChange = (accessor) => {
    const sortOrder =
    accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    };

   
    return (
        <thead>
        <tr>
         {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
          ? sortField && sortField === accessor && order === "asc"
           ? "up"
           : sortField && sortField === accessor && order === "desc"
           ? "down"
           : "default"
          : "";
          return (
           <th
            key={accessor}
            onClick={sortable ? () => handleSortingChange(accessor) : null}
            className={cl}
           >
            {label}
           </th>
          );
         })}
        </tr>
       </thead>
    );
   };
   
   export default TableHead;