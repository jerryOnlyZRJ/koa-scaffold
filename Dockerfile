FROM ranjayzheng/dev
COPY . /home/ranjay/koa-demo
WORKDIR /home/ranjay/koa-demo
RUN source /etc/profile
RUN npm install -S
RUN npm run start:dev
EXPOSE 3000