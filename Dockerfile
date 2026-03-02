# Use Node Image
FROM node:18

# Create app folder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]