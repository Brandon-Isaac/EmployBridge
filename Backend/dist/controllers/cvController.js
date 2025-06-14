"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadCV = exports.generateAICV = exports.extractSkillsFromCV = exports.deleteCV = exports.getCV = exports.uploadCV = void 0;
const CV_1 = require("../entities/CV");
const User_1 = require("../entities/User");
const Skill_1 = require("../entities/Skill");
const data_source_1 = require("../data-source");
const openai_1 = require("openai");
const Experience_1 = require("../entities/Experience");
const Education_1 = require("../entities/Education");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const experienceRepository = data_source_1.AppDataSource.getRepository(Experience_1.Experience);
const educationRepository = data_source_1.AppDataSource.getRepository(Education_1.Education);
const skillRepository = data_source_1.AppDataSource.getRepository(Skill_1.Skill);
const openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const cvRepository = data_source_1.AppDataSource.getRepository(CV_1.CV);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
// Helper function to extract skills from CV text (simplified example)
const extractSkillsFromText = (text) => {
    const commonSkills = [
        'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js',
        'Python', 'Java', 'C#', 'SQL', 'PostgreSQL', 'MongoDB',
        'HTML', 'CSS', 'AWS', 'Azure', 'Docker', 'Kubernetes',
        'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'
    ];
    const foundSkills = commonSkills.filter(skill => text.toLowerCase().includes(skill.toLowerCase()));
    return foundSkills;
};
exports.uploadCV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['cv']
        });
        if (!user) {
            // Clean up uploaded file
            fs_1.default.unlinkSync(req.file.path);
            return res.status(404).json({ message: 'User not found' });
        }
        // Check if user already has a CV
        const existingCV = yield cvRepository.findOne({ where: { user: { id: userId } } });
        if (existingCV) {
            // Delete old file
            if (existingCV.filePath && fs_1.default.existsSync(existingCV.filePath)) {
                fs_1.default.unlinkSync(existingCV.filePath);
            }
            yield cvRepository.delete(existingCV.id);
        }
        // Read file content for skill extraction
        const fileContent = fs_1.default.readFileSync(req.file.path, 'utf-8');
        const extractedSkills = extractSkillsFromText(fileContent);
        const cv = new CV_1.CV();
        cv.user = user;
        cv.fileName = req.file.originalname;
        cv.filePath = req.file.path;
        cv.extractedSkills = extractedSkills;
        yield cvRepository.save(cv);
        // Update user's CV reference
        user.cv = cv;
        yield userRepository.save(user);
        res.status(201).json(cv);
    }
    catch (error) {
        if (req.file && fs_1.default.existsSync(req.file.path)) {
            fs_1.default.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: 'Error uploading CV', error });
    }
}));
exports.getCV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const cv = yield cvRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!cv) {
            return res.status(404).json({ message: 'CV not found' });
        }
        // Read the CV content if the file exists
        let content = null;
        if (cv.filePath && fs_1.default.existsSync(cv.filePath)) {
            content = fs_1.default.readFileSync(cv.filePath, 'utf-8');
        }
        res.json(Object.assign(Object.assign({}, cv), { content, downloadUrl: `/api/cvs/download/${cv.id}` }));
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching CV', error });
    }
}));
exports.deleteCV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const cv = yield cvRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!cv) {
            return res.status(404).json({ message: 'CV not found' });
        }
        if (cv.filePath && fs_1.default.existsSync(cv.filePath)) {
            fs_1.default.unlinkSync(cv.filePath);
        }
        yield cvRepository.delete(cv.id);
        res.json({ message: 'CV deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting CV', error });
    }
}));
exports.extractSkillsFromCV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        // Read file content for skill extraction
        const fileContent = fs_1.default.readFileSync(req.file.path, 'utf-8');
        const extractedSkills = extractSkillsFromText(fileContent);
        // Clean up the uploaded file
        fs_1.default.unlinkSync(req.file.path);
        res.json({ skills: extractedSkills });
    }
    catch (error) {
        if (req.file && fs_1.default.existsSync(req.file.path)) {
            fs_1.default.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: 'Error extracting skills from CV', error });
    }
}));
exports.generateAICV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        const userId = req.user.userId;
        // Get all user data needed for CV
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills', 'experiences', 'educations', 'cv'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Delete existing CV if it exists
        if (user.cv) {
            if (user.cv.filePath && fs_1.default.existsSync(user.cv.filePath)) {
                fs_1.default.unlinkSync(user.cv.filePath);
            }
            yield cvRepository.delete(user.cv.id);
        }
        let cvContent;
        try {
            // Prepare prompt for AI
            const prompt = `Generate a professional CV in Markdown format for ${user.name} with the following details:
      
      Skills: ${((_a = user.skills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.name).join(', ')) || 'None'}
      
      Work Experience:
      ${((_b = user.experiences) === null || _b === void 0 ? void 0 : _b.map(exp => {
                var _a;
                return `
      - ${exp.title} at ${exp.company} (${exp.startDate.toLocaleDateString()} - ${exp.current ? 'Present' : (_a = exp.endDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()})
        ${exp.description}
      `;
            }).join('\n')) || 'No experience listed'}
      
      Education:
      ${((_c = user.educations) === null || _c === void 0 ? void 0 : _c.map(edu => {
                var _a;
                return `
      - ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution} (${edu.startDate.toLocaleDateString()} - ${edu.current ? 'Present' : (_a = edu.endDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()})
        ${edu.description || ''}
      `;
            }).join('\n')) || 'No education listed'}
      
      Include sections for:
      1. Professional Summary (3-4 sentences)
      2. Skills (grouped by category if possible)
      3. Work Experience (with bullet points of key achievements)
      4. Education
      5. Any other relevant sections (Projects, Certifications, etc.)
      
      Format the CV professionally with proper Markdown headings and bullet points.`;
            // Call OpenAI API
            const completion = yield openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional CV writer. Generate well-structured CVs in Markdown format based on user-provided information.'
                    },
                    { role: 'user', content: prompt }
                ],
                model: 'gpt-3.5-turbo',
            });
            cvContent = completion.choices[0].message.content || '';
        }
        catch (apiError) {
            // If API call fails (e.g., quota exceeded), generate a basic CV
            console.warn('OpenAI API error:', apiError);
            // Generate a basic CV format
            cvContent = `# ${user.name}'s Professional CV

## Professional Summary
${user.bio || 'Experienced professional with a strong background in their field.'}

## Skills
${((_d = user.skills) === null || _d === void 0 ? void 0 : _d.map(skill => `- ${skill.name}`).join('\n')) || 'No skills listed'}

## Work Experience
${((_e = user.experiences) === null || _e === void 0 ? void 0 : _e.map(exp => {
                var _a;
                return `
### ${exp.title} at ${exp.company}
*${exp.startDate.toLocaleDateString()} - ${exp.current ? 'Present' : (_a = exp.endDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()}*

${exp.description}
`;
            }).join('\n')) || 'No experience listed'}

## Education
${((_f = user.educations) === null || _f === void 0 ? void 0 : _f.map(edu => {
                var _a;
                return `
### ${edu.degree} in ${edu.fieldOfStudy}
*${edu.institution}*
*${edu.startDate.toLocaleDateString()} - ${edu.current ? 'Present' : (_a = edu.endDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()}*

${edu.description || ''}
`;
            }).join('\n')) || 'No education listed'}`;
        }
        if (!cvContent) {
            return res.status(500).json({ message: 'Failed to generate CV content' });
        }
        // Create new CV
        const cv = new CV_1.CV();
        cv.user = user;
        cv.fileName = `${user.name.replace(/\s+/g, '_')}_CV_${new Date().toISOString().split('T')[0]}.md`;
        cv.filePath = path_1.default.join('generated', cv.fileName);
        cv.extractedSkills = ((_g = user.skills) === null || _g === void 0 ? void 0 : _g.map(skill => skill.name)) || [];
        // Ensure directory exists
        const generatedDir = path_1.default.join(process.cwd(), 'generated');
        if (!fs_1.default.existsSync(generatedDir)) {
            fs_1.default.mkdirSync(generatedDir, { recursive: true });
        }
        // Save markdown file
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), cv.filePath), cvContent);
        // Save CV to database
        const savedCV = yield cvRepository.save(cv);
        // Update user's CV reference
        user.cv = savedCV;
        yield userRepository.save(user);
        res.json({
            message: 'CV generated successfully',
            cv: {
                id: savedCV.id,
                fileName: savedCV.fileName,
                filePath: savedCV.filePath,
                extractedSkills: savedCV.extractedSkills,
                userId: user.id,
                content: cvContent,
                downloadUrl: `/api/cvs/download/${savedCV.id}`,
                createdAt: savedCV.createdAt,
                updatedAt: savedCV.updatedAt
            },
        });
    }
    catch (error) {
        console.error('Error generating AI CV:', error);
        res.status(500).json({ message: 'Error generating CV', error });
    }
}));
exports.downloadCV = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cv = yield cvRepository.findOne({ where: { id } });
        if (!cv || !cv.filePath || !fs_1.default.existsSync(cv.filePath)) {
            return res.status(404).json({ message: 'CV not found' });
        }
        if (cv.filePath && cv.fileName) {
            res.download(cv.filePath, cv.fileName);
        }
        else {
            res.status(400).json({ message: 'Invalid CV file path or name' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error downloading CV', error });
    }
}));
