import TeamMember from '../models/teamMember.js';

export const getActiveMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({ isActive: true }).sort({
      displayOrder: 1,
    });

    res.status(200).json({
      success: true,
      data: members,
      count: members.length,
      message: 'Active members retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting active members:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Member ID is required',
      });
    }

    const member = await TeamMember.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }

    res.status(200).json({
      success: true,
      data: member,
      message: 'Team member retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting member by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const getAllMembers = async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ displayOrder: 1 });

    res.status(200).json({
      success: true,
      data: members,
      count: members.length,
      message: 'All members retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting all members:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const createMember = async (req, res) => {
  try {
    const { name, role, image, ...rest } = req.body;

    // Input validation (following auth controller pattern)
    if (!name || !role) {
      return res.status(400).json({
        success: false,
        message: 'Name and role are required',
      });
    }

    // Check if member with same name already exists
    const existingMember = await TeamMember.findOne({ name });
    if (existingMember) {
      return res.status(400).json({
        success: false,
        message: 'Team member with this name already exists',
      });
    }

    const newMember = new TeamMember({ name, role, image, ...rest });
    const saved = await newMember.save();

    if (!saved) {
      return res.status(500).json({
        success: false,
        message: 'Team member not created',
      });
    }

    res.status(201).json({
      success: true,
      data: saved,
      message: 'Team member created successfully',
    });
  } catch (error) {
    console.error('Error creating team member:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Member ID is required',
      });
    }

    // Check if member exists first
    const existingMember = await TeamMember.findById(id);
    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }

    const updated = await TeamMember.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updated,
      message: 'Team member updated successfully',
    });
  } catch (error) {
    console.error('Error updating team member:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Member ID is required',
      });
    }

    const deleted = await TeamMember.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Team member deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting team member:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
