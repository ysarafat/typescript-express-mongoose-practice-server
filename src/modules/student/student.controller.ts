import { Request, Response } from 'express';
import { studentServices } from './student.service';

// create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    //   will call service func and send data
    const result = await studentServices.createStudent(student);

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

export const StudentController = {
  createStudent,
};
