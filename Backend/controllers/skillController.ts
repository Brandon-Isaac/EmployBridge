import { Request, Response } from 'express';
import { Skill, User } from '../entities';
import { AppDataSource } from '../data-source';

const skillRepository = AppDataSource.getRepository(Skill);
const userRepository = AppDataSource.getRepository(User);

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await skillRepository.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};

export const getSkillById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skill = await skillRepository.findOne({
      where: { id },
      relations: ['users', 'jobs'],
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skill', error });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name, category, description } = req.body;
    const skill = new Skill();
    skill.name = name;
    skill.category = category;
    if (description) skill.description = description;

    await skillRepository.save(skill);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error creating skill', error });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, category, description } = req.body;

    const skill = await skillRepository.findOne({ where: { id } });
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (name) skill.name = name;
    if (category) skill.category = category;
    if (description) skill.description = description;

    await skillRepository.save(skill);
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error updating skill', error });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await skillRepository.delete(id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skill', error });
  }
};

export const getUserSkills = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user skills', error });
  }
};

export const addUserSkill = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { skillId } = req.body;

    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const skill = await skillRepository.findOne({ where: { id: skillId } });
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (!user.skills) user.skills = [];
    if (!user.skills.some(s => s.id === skillId)) {
      user.skills.push(skill);
      await userRepository.save(user);
    }

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user skill', error });
  }
};

export const removeUserSkill = async (req: Request, res: Response) => {
  try {
    const { userId, skillId } = req.params;
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.skills = user.skills?.filter(skill => skill.id !== skillId) || [];
    await userRepository.save(user);

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error removing user skill', error });
  }
};