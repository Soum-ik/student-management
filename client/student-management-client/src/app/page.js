import { Button } from "@/components/ui/button";
import getStudents from "@/lib/actions/getStudent";
import { FaUserPlus } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";

export default async function Home() {

  const datas = await getStudents();

  return (
    <section className="h-[100vh]">
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm">Student Management</p>
        </div>
        <Button size="rounded">
          <FaUserPlus className="mr-2" size={20} />
          New Admission
        </Button>
      </div>
      <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border border-input">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-center">{datas?.length}</h2>
          <p className="text-base font-medium">Total Students</p>
        </div>
        <div>
          <HiMiniUsers className="text-primary" size={50} />
        </div>
      </div>
    </section>
  );
}
