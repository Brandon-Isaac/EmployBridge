"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./data-source"); // Ensure this path matches your project structure
// Routes
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const skillRoutes_1 = __importDefault(require("./routes/skillRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
const portfolioRoutes_1 = __importDefault(require("./routes/portfolioRoutes"));
const cvRoutes_1 = __importDefault(require("./routes/cvRoutes"));
const experienceRoutes_1 = __importDefault(require("./routes/experienceRoutes"));
const educationRoutes_1 = __importDefault(require("./routes/educationRoutes"));
const chatbotRoutes_1 = __importDefault(require("./routes/chatbotRoutes"));
const career_path_routes_1 = __importDefault(require("./routes/career-path.routes"));
const interview_routes_1 = __importDefault(require("./routes/interview.routes")); // Import interview routes
const analyticsRoutes_1 = __importDefault(require("./routes/analyticsRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://employ-bridge.vercel.app/',
        'https://your-custom-domain.com'
    ],
    credentials: true
}));
app.use(express_1.default.json());
// Database connection
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
// Routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/skills', skillRoutes_1.default);
app.use('/api/jobs', jobRoutes_1.default);
app.use('/api/applications', applicationRoutes_1.default);
app.use('/api/portfolios', portfolioRoutes_1.default);
app.use('/api/cvs', cvRoutes_1.default);
app.use('/api/experiences', experienceRoutes_1.default);
app.use('/api/educations', educationRoutes_1.default);
app.use('/api/chatbot', chatbotRoutes_1.default);
app.use('/api/career-paths', career_path_routes_1.default);
app.use('/api/interviews', interview_routes_1.default); // Add this line for interview routes
app.use('/api/analytics', analyticsRoutes_1.default);
// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
