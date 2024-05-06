import React, { useDebugValue, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addEmployees } from "../Services/FIrebaseServices";

const EmployeeInsertion = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = async (data) => {
    const addData = await addEmployees(data);
    reset();
    alert("Employee Data Added Successfully");
  };
  return (
    <>
      <form className="mx-3" onSubmit={handleSubmit(submitData)}>
        <br />
        <input
          type="text"
          placeholder="Enter Employee Name : "
          {...register("Name", {
            required: { value: true, message: "Name is Required" },
          })}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Employee Id : "
          {...register("Id", {
            required: { value: true, message: "Id is Required" },
          })}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Employee Designation : "
          {...register("Designation", {
            required: { value: true, message: "Designation is Required" },
          })}
        />
        <br/>
        <br/>
        <select {...register("ReportingTo")} placeholder = "Reporting To ....">
             <option value = "Mustafa Kashif">Mustafa Kashif</option>
             <option value = "Kashif Mehmood">Kashif Mehmood</option>
        </select>
        <br />
        <br />
        <Button variant="outline-success" type="submit">
          Save Information
        </Button>
      </form>
      <br />
    </>
  );
};

export default EmployeeInsertion;
