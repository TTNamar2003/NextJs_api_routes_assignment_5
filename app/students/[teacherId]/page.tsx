"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Student {
  id: number;
  name: string;
  teacherId: number;
}

export default function StudentsByTeacherPage() {
  const { teacherId } = useParams();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (teacherId) {
      fetch(`/api/students/${teacherId}`)
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching students:", err));
    }
  }, [teacherId]);

  return (
    <div className=" bg-gray-100 p-8 w-[100%]">
      <h1 className="text-3xl font-bold text-center mb-6">
        Students Under Teacher {teacherId}
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {loading ? (
          <p className="text-center">Loading students...</p>
        ) : students.length > 0 ? (
          <ul className="space-y-4">
            {students.map((student) => (
              <li key={student.id} className="p-4 bg-gray-200 rounded-lg">
                <p className="text-lg font-semibold">{student.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No students found for this teacher.</p>
        )}
      </div>
    </div>
  );
}
