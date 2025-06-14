# Use Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build TypeScript (if applicable)
RUN npm run build

# Expose port
EXPOSE 3000

# Run the server
CMD ["npm", "start"]