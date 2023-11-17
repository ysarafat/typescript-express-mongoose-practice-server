import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //   will call service func and send data
    const result = await StudentServices.createStudent(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get all students
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudent();
    // send response
    res.status(200).json({
      success: true,
      message: 'Student are retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single student controller
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudent(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student are retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
