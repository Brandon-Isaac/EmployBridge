"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Routes
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const skillRoutes_1 = __importDefault(require("./routes/skillRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
const portfolioRoutes_1 = __importDefault(require("./routes/portfolioRoutes"));
const cvRoutes_1 = __importDefault(require("./routes/cvRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database connection
(0, typeorm_1.createConnection)().then(() => {
    console.log('Database connected');
}).catch(error => console.log('Database connection error:', error));
// Routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/skills', skillRoutes_1.default);
app.use('/api/jobs', jobRoutes_1.default);
app.use('/api/applications', applicationRoutes_1.default);
app.use('/api/portfolios', portfolioRoutes_1.default);
app.use('/api/cvs', cvRoutes_1.default);
// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
