# Set image
ARG VERSION=16-alpine 
FROM node:$VERSION AS deps

# Set working directory, putting all files in the root isn't good
WORKDIR /app

# Copy dependencies
COPY COPY package.json yarn.lock ./

# Install dependencies 
RUN yarn install --frozen-lockfile 

# -----------------------------------------------------------------------------
# Rebuild the source code only when needed
# -----------------------------------------------------------------------------
FROM node:16-alpine AS builder
WORKDIR /app

# Copy everything else 
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build app 
RUN yarn build 

#----------
# still need to create production image
#----------

# Expse the listening port 
EXPOSE 3000

ENV PORT 3000

# Start the app once docker starts
CMD [ "yarn", "start" ]
# ^ array notation is better apparently 