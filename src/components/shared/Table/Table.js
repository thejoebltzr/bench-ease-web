import React from "react";
import { default as RBTable } from "react-bootstrap/Table";

const Table = ({data}) => {
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
        {data?.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.primary_skills}</td>
            <td>{item.additional_skills}</td>
            <td><a href="/user-profile">View</a></td>
          </tr>
        ))}
        {/* <tr>
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
        </tr> */}

        

      </tbody>
    </RBTable>
  );
};

export default Table;
