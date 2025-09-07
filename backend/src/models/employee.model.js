import mongoose, { Schema } from 'mongoose';

const employeeSchema = new Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Terminated'],
      default: 'Active',
      required: true,
    },
    certificateIssueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

export const Employee = mongoose.model('Employee', employeeSchema);
