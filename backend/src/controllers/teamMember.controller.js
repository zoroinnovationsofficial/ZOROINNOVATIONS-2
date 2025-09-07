import * as teamMemberService from '../services/teamMembers.service.js';

export const getAllTeamMembers = async (req, res) => {
  const { page, limit } = req.query;
  const result = await teamMemberService.getAllTeamMembers({ page, limit });
  res.json(result);
};

// ... keep the rest of the controller functions the same
export const getTeamMemberById = async (req, res) => {
  const member = await teamMemberService.getTeamMemberById(req.params.id);
  if (!member) return res.status(404).json({ message: 'Not found' });
  res.json(member);
};

export const createTeamMember = async (req, res) => {
  const member = await teamMemberService.createTeamMember(req.body);
  res.status(201).json(member);
};

export const updateTeamMember = async (req, res) => {
  const member = await teamMemberService.updateTeamMember(
    req.params.id,
    req.body,
  );
  if (!member) return res.status(404).json({ message: 'Not found' });
  res.json(member);
};

export const deleteTeamMember = async (req, res) => {
  await teamMemberService.deleteTeamMember(req.params.id);
  res.json({ message: 'Deleted' });
};