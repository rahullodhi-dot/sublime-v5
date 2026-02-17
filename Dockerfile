FROM node:20

WORKDIR /sublime-house-fe

COPY . .


EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]