import Link from "next/link";

const StudentList = () => {
  return (
    <div>
      <h1>Student Details</h1>

      <ol type="1" style={{ fontSize: "30px" }}>
        <li>
          <Link href="/studentList/peter">1) peter</Link>
        </li>
        <li>
          <Link href="/studentList/John">2) John</Link>
        </li>
        <li>
          <Link href="/studentList/same">3) same</Link>
        </li>
        <li>
          <Link href="/studentList/roother">4) Roother ford</Link>
        </li>
        <li>
          <Link href="/studentList/mical">5) mical</Link>
        </li>
      </ol>
    </div>
  );
};

export default StudentList;
