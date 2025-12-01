# Multi-stage build for CIVIC-EYE

# Stage 1: Build React frontend
FROM node:18-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Setup Node.js backend
FROM node:18-alpine
WORKDIR /app

# Copy backend dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --production

# Copy backend code
COPY server/ ./

# Copy built frontend from stage 1
COPY --from=client-build /app/client/build /app/server/public

WORKDIR /app/server
EXPOSE 5000

CMD ["node", "index.js"]
