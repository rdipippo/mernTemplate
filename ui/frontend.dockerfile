FROM node:18-alpine AS base
WORKDIR /mernTemplate/ui/
COPY public/ /mernTemplate/ui/public
COPY src/ /mernTemplate/ui/src
COPY package.json /mernTemplate/ui/
RUN npm install
CMD ["npm", "start"]

