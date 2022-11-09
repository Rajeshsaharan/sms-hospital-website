FROM node

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'client' folder the current working directory
WORKDIR /frontend

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /frontend/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'client' folder)
COPY . /frontend/

# build client for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]