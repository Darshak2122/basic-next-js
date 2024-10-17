'use client'
const Student = ({params}) => {
    console.log("params>>",params);
  return (
    <>
      <h1>Student Details</h1>
      <h3>Name :- {params.student}</h3>
    </>
  );
};
export default Student;
