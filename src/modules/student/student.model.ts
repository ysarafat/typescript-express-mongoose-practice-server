import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentName,
} from './student.interface';

const studentNameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
const localGuardian = new Schema<LocalGuardian>({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
});
const StudentSchema = new Schema<Student>({
  id: {
    type: String,
  },
  name: studentNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localGuardian,
  isActive: ['active', 'inactive'],
});

const StudentModel = model<Student>('Student', StudentSchema);

export default StudentModel;
