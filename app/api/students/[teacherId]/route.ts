import { NextResponse } from "next/server";
import data from "../../data.json";

export async function GET(
  request: Request,
  { params }: { params: { teacherId: string } }
) {
  const teacherId = parseInt(params.teacherId, 10);
  if (isNaN(teacherId)) {
    return NextResponse.json(
      { error: "Invalid teacher ID" },
      { status: 400 }
    );
  }

  const students = data.students.filter(student => student.teacherId === teacherId);

  return NextResponse.json(students);
}
