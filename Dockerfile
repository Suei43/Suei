# Step 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Run the application
FROM node:20-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV production

# Set working directory
WORKDIR /app

# Copy only the necessary files for production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./

# Install only production dependencies
RUN npm install --legacy-peer-deps --only=production

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]