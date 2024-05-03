import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteEmployeesById, getAllEmployees } from "../Services/FIrebaseServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const DataDisplay = () => {
  const [Employeedata, setEmployeeData] = useState([]);
  const Navigation = useNavigate()
  useEffect(() => {
    (async () => {
      const getData = await getAllEmployees();
      setEmployeeData(getData);
    })();
  }, [Employeedata]);

  if(!Employeedata) return null 
  return (
    <>
      <Table className="mx-3 p-4" striped>
        <thead>
          <tr>
            <td>Employee Id</td>
            <td>Employee Name</td>
            <td>Employee Designation</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {Employeedata.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.Id}</td>
                <td>{employee.Name}</td>
                <td>{employee.Designation}</td>
                <td>
                  <Button variant="outline-primary" onClick={() => Navigation("/showModal")}>View</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="outline-danger" onClick={() => deleteEmployeesById(employee.pid)}>Delete</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="outline-success">Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DataDisplay;
