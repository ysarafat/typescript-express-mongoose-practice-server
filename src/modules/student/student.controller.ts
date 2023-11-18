import { Request, Response } from 'express';

import { StudentServices } from './student.service';
import { StudentValidationSchema } from './student.validation';
// import { StudentSchemaValidation } from './student.validation';
// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    // validation

    const { student: studentData } = req.body;
    // validation with joi
    // const { value, error } = StudentSchemaValidation.validate(studentData);
    // if (error) {
    //   return res.status(500).json({
    //     success: false,
    //     message: 'Something want wrong!',
    //     error,
    //   });
    // }
    // validation using zod
    const zodDataParse = StudentValidationSchema.parse(studentData);
    //   will call service func and send data
    const result = await StudentServices.createStudent(zodDataParse);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something want wrong!',
      error,
    });
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
