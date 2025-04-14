const core = require('@actions/core'); // input and output
const exec = require('@actions/exec'); // executing commands

async function run() {
    try {
        // Get inputs
        const token = core.getInput('vercel-token', { required: true });
        const projectPath = core.getInput('project-path', { required: true });

        // Set Vercel token as an environment variable
        process.env.VERCEL_TOKEN = token;

        // Deploy to Vercel
        await exec.exec(`npx vercel --cwd ${projectPath} --prod --token ${token}`);

        // Get the deployment URL
        let deploymentUrl = '';
        const options = {
            listeners: {
                stdout: (data) => {
                    deploymentUrl += data.toString();
                },
            },
        };

        await exec.exec(`npx vercel --cwd ${projectPath} --prod --token ${token}`, [], options);

        // Extract the deployment URL from the output
        const urlMatch = deploymentUrl.match(/https?:\/\/[^\s]+/);
        if (urlMatch) {
            core.setOutput('website-url', urlMatch[0]);
        } else {
            throw new Error('Failed to extract deployment URL');
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();