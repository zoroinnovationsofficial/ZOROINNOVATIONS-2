import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const teamMemberSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 70 },
    role: { type: String, required: true, trim: true, maxlength: 60 },
    department: { type: String, trim: true },
    bio: { type: String, trim: true, maxlength: 500 },
    employeeId: { type: String, trim: true, unique: true },
    profileImage: { type: String, trim: true, default: null },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

teamMemberSchema.index({ employeeId: 1 }, { unique: true });

const TeamMember = model('TeamMember', teamMemberSchema);

export default TeamMember;
