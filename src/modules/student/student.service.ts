import { Student } from './student.interface';
import StudentModel from './student.model';

// create student service
const createStudent = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
// get all student service
const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

// get a student service
const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
