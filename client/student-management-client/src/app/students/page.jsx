
import Card from "@/components/CardPage";
import getStudents from "@/lib/actions/getStudent";
import React from "react";

async function page() {
  const datas = await getStudents();
  console.log(datas);
  return <div className=" bg-white min-h-screen rounded-md py-3">
    <Card datas={datas} />
  </div>;
}

export default page;
