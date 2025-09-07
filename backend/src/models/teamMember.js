import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, minlength: 2 },
    position: { type: String, required: true },
    imageUrl: { type: String },
    bio: { type: String, maxlength: 500 },
    email: { type: String, match: /.+\@.+\..+/ },
    linkedinUrl: { type: String },
    phone: { type: String },
    specializations: [String],
    certifications: [String],
    yearsExperience: { type: Number, min: 0 },
    isActive: { type: Boolean, default: true },
    displayOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model('TeamMember', teamMemberSchema);
