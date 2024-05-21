# Use the official Node.js 14 image as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Use Nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html

EXPOSE 3001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
