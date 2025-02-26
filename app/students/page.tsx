"use client";
import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  teacherId: number;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className=" bg-gray-100 p-8 w-[100%]">
      <h1 className="text-3xl font-bold text-center mb-6">Students List</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {students.length > 0 ? (
          <ul className="space-y-4">
            {students.map((student) => (
              <li key={student.id} className="p-4 bg-gray-200 rounded-lg">
                <p className="text-lg font-semibold">{student.name}</p>
                <p className="text-gray-700">Teacher ID: {student.teacherId}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Loading students...</p>
        )}
      </div>
    </div>
  );
}
