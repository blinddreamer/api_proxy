# Use the official Node.js image as the base image
FROM node:20

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code to the working directory
COPY . .

# Expose the port that the server listens on (5000 in this case)
EXPOSE 5000

# Start the server when the container runs
CMD ["npm", "start"]
