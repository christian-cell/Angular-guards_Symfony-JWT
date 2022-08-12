run 

ng new <angularProjectName>

$ docker-compose build

$ docker-compose up -d

go in php74-container

$ docker exec -it php74-container bash

and install symfony

$ composer create-project symfony/skeleton .

inside backend/app you have a .env , set mysql line like this

DATABASE_URL="mysql://root:pass@mysql8-service:3306/databasaName?serverVersion=8"

I highly recommend set your own password , host and port in .env and use this env var in docker-compose.yml

require dependencies 

$ composer require doctrine

$ composer require annotations

$ composer require maker

$ composer require cors

install bootstrap in rootdirectory/app 

$ npm install bootstrap jquery @popperjs/core

review in angular.json the arrys of styles and scripts

