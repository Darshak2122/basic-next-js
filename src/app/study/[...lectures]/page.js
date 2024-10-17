"use client";
const Lacture = ({ params }) => {
  const data = params.lectures[0];
  return (
    <>
      <h1>Lacture of Collage</h1>
      <h2>Lacture for {data}</h2>
    </>
  );
};
export default Lacture;
