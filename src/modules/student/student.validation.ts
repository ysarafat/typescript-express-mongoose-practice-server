import { z } from 'zod';
// import Joi from 'joi';
// export const StudentSchemaValidation = Joi.object({
//   id: Joi.string(),
//   name: {
//     firstName: Joi.string().max(20).required(),
//     middleName: Joi.string().max(20),
//     lastName: Joi.string().max(20).required(),
//   },
//   gender: Joi.string().required().valid('male', 'female', 'other'),
//   dateOfBirth: Joi.string().required(),
//   email: Joi.string().email().required(),
//   avatar: Joi.string(),
//   contactNo: Joi.string().required(),
//   emergencyContactNo: Joi.string().required(),
//   bloodGroup: Joi.string().valid(
//     'A+',
//     'A-',
//     'B+',
//     'B-',
//     'O+',
//     'O-',
//     'AB+',
//     'AB-',
//   ),
//   permanentAddress: Joi.string().required(),
//   presentAddress: Joi.string().required(),
//   guardian: {
//     fatherName: Joi.string().required(),
//     fatherOccupation: Joi.string().required(),
//     fatherContactNo: Joi.string().required(),
//     motherName: Joi.string().required(),
//     motherOccupation: Joi.string().required(),
//     motherContactNo: Joi.string().required(),
//   },
//   localGuardian: {
//     name: Joi.string().required(),
//     occupation: Joi.string().required(),
//     contactNo: Joi.string().required(),
//     address: Joi.string().required(),
//   },
//   isActive: Joi.string().required().valid('active', 'blocked'),
// });

const StudentNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First Name is required' })
    .max(255)
    .trim(),
  middleName: z.string().max(255).trim(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name is required' })
    .max(255)
    .trim(),
});

const GuardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1, { message: 'Father Name is required' })
    .max(255)
    .trim(),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' })
    .max(255)
    .trim(),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact Number is required' })
    .max(20)
    .trim(),
  motherName: z
    .string()
    .min(1, { message: 'Mother Name is required' })
    .max(255)
    .trim(),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' })
    .max(255)
    .trim(),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact Number is required' })
    .max(20)
    .trim(),
});

const LocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Local Guardian Name is required' })
    .max(255)
    .trim(),
  occupation: z
    .string()
    .min(1, { message: 'Local Guardian Occupation is required' })
    .max(255)
    .trim(),
  contactNo: z
    .string()
    .min(1, { message: 'Local Guardian Contact Number is required' })
    .max(20)
    .trim(),
  address: z
    .string()
    .min(1, { message: 'Local Guardian Address is required' })
    .max(255)
    .trim(),
});

export const StudentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }).max(255).trim(),
  name: StudentNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of Birth is required' })
    .max(255)
    .trim(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .max(255)
    .trim()
    .email({ message: 'Invalid email address' }),
  avatar: z.string().max(255).trim(),
  contactNo: z
    .string()
    .min(1, { message: 'Contact Number is required' })
    .max(20)
    .trim(),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency Contact Number is required' })
    .max(20)
    .trim(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
    .nullable(),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent Address is required' })
    .max(255)
    .trim(),
  presentAddress: z
    .string()
    .min(1, { message: 'Present Address is required' })
    .max(255)
    .trim(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  isActive: z.enum(['active', 'blocked']).default('active'),
});
