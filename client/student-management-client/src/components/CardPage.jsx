'use client';
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";
import CardProfile from "./CardProfile";

function Card({ datas }) {
  const [input, setInput] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Debounce logic
  useEffect(() => {
    setLoading(true); // Set loading to true when input changes
    const handler = setTimeout(() => {
      setDebouncedInput(input);
      setLoading(false); // Set loading to false after debounce delay
    }, 400); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  const filteredData = datas.filter((data) =>
    data.name.toLowerCase().includes(debouncedInput.toLowerCase()) ||
    data.department.toLowerCase().includes(debouncedInput.toLowerCase()) ||
    data.year.toLowerCase().includes(debouncedInput.toLowerCase()) ||
    data.section.toLowerCase().includes(debouncedInput.toLowerCase()) ||
    data.roll.toLowerCase().includes(debouncedInput.toLowerCase()) ||
    data.email.toLowerCase().includes(debouncedInput.toLowerCase())
  );

  const time = (time) => {
    return time.toLocaleString();
  };

  return (
    <div className="mx-5 ">
      {/* input for filtering */}
      <div className="border  rounded-md max-w-md   mx-auto">
        <input
          value={input}
          className="w-full p-2 outline-none  "
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Filter..."
        />
      </div>

      {/* loading indicator */}
      {loading ? <div className="mt-4 text-center flex items-center justify-center gap-2"> <Loader className=' animate-spin' /> Loading...</div> : <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3  ">
        {filteredData.map((data) => (
          <CardProfile data={data}/>
        ))}
      </div>}

      {!loading && filteredData.length === 0 && <p className=" text-center">Student not found!</p>}


    </div>
  );
}

export default Card;
