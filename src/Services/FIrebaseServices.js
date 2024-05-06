import { child, get, push, ref, remove, set } from "firebase/database";
import { db } from "../lib/firebaseConfig";
import { EmployeeEntity } from "./firebaseEntity";

const dbRef = ref(db);

export const addEmployees = async (data) => {
  try {
    const employeeKey = push(child(ref(db), EmployeeEntity)).key;
    const EmployeeEntityRef = ref(db, EmployeeEntity + "/" + employeeKey);
    const response = set(EmployeeEntityRef, {
      pid: employeeKey,
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await get(child(dbRef, EmployeeEntity));

    if (response.exists()) {
      const data = response.val();
      return Object.values(data);
    }
  } catch (error) {
    console.error("Error", error);
  }
};

// export const getAllLeads = async () => {
//     try {
//       const response = await get(child(dbRef, Techleads));
  
//       if (response.exists()) {
//         const data = response.val();
//         return Object.values(data);
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };
  
  

export const deleteEmployeesById = async (id) => {
    try {
      const dbReference = ref(db, EmployeeEntity + "/" + id);
      remove(dbReference).then(() => console.log("Removed !"));
      alert("Employee Record is removed successfully");
    } catch (error) {
      console.error("Error", error);
    }
  };