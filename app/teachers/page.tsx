"use client";
import { useEffect, useState } from "react";

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    fetch("/api/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Error fetching teachers:", err));
  }, []);

  return (
    <div className=" bg-gray-100 p-8 w-[100%]">
      <h1 className="text-3xl font-bold text-center mb-6">Teachers List</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6  ">
        {teachers.length > 0 ? (
          <ul className="space-y-4  ">
            {teachers.map((teacher) => (
              <li key={teacher.id} className="p-4 bg-gray-200 rounded-lg">
                <p className="text-lg font-semibold">{teacher.name}</p>
                <p className="text-gray-700">Subject: {teacher.subject}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Loading teachers...</p>
        )}
      </div>
    </div>
  );
}
