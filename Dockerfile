# Use official Node.js LTS image
FROM node:lts-jod

# Set working directory
WORKDIR /usr/src/

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Expose the app port
EXPOSE 3000

# Default command
CMD ["npm", "start"]
