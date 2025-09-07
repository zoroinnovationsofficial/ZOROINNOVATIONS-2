import TeamMember from '../models/teamMembers.model.js';

export const getAllTeamMembers = async (options = {}) => {
  const page = parseInt(options.page, 10) || 1;
  const limit = parseInt(options.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const members = await TeamMember.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await TeamMember.countDocuments();

  return {
    data: members,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getTeamMemberById = async (id) => TeamMember.findById(id);

export const createTeamMember = async (data) => TeamMember.create(data);

export const updateTeamMember = async (id, data) =>
  TeamMember.findByIdAndUpdate(id, data, { new: true });

export const deleteTeamMember = async (id) => TeamMember.findByIdAndDelete(id);