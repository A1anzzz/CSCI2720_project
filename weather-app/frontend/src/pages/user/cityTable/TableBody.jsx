//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { Link } from 'react-router-dom';

const TableBody = ({ tableData, columns }) => {
    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data._id}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          if (accessor === 'name') {
            return <td key={accessor}><Link to={"/Detail/" + data.name}>{tData}</Link></td>;
          }
          else {
            return <td key={accessor}>{tData}</td>;
          }
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };

export default TableBody;