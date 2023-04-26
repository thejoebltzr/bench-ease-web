import React from "react";
import { default as RBTable } from "react-bootstrap/Table";

const Table = () => {
  return (
    <RBTable responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Primary Skills</th>
          <th>Addtional Skills</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index === 4) {
              return (
                <td>
                  <a href="/user-profile">View</a>
                </td>
              );
            }
            return <td key={index}>Table cell {index}</td>;
          })}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index === 4) {
              return (
                <td>
                  <a href="/user-profile">View</a>
                </td>
              );
            }
            return <td key={index}>Table cell {index}</td>;
          })}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index === 4) {
              return (
                <td>
                  <a href="/user-profile">View</a>
                </td>
              );
            }
            return <td key={index}>Table cell {index}</td>;
          })}
        </tr>
      </tbody>
    </RBTable>
  );
};

export default Table;
