// import express from 'express';
// import { AIController } from '../controllers/AIController';
// import { authMiddleware } from '../middleware/authMiddleware';
// import { roleMiddleware } from '../middleware/roleMiddleware';

// const router = express.Router();
// const aiController = new AIController();

// // Search for candidates using AI
// router.post(
//   '/search-candidates',
//   authMiddleware,
//   roleMiddleware(['employer']),
//   aiController.searchCandidates.bind(aiController)
// );

// // Get AI-generated job description suggestions
// router.post(
//   '/job-suggestions',
//   authMiddleware,
//   roleMiddleware(['employer']),
//   aiController.getJobDescriptionSuggestions.bind(aiController)
// );

// export default router; 