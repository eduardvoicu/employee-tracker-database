# Employee Tracker Database

## Repository & Video Walkthrough


## Directory

1. [User Story](#user-story)
2. [Installation](#installation)
3. [Application Preview](#application_preview)
4. [Technology](#technology)
5. [License](#license)
6. [About](#about)

## User Story

## Installation

Copy and run the code below to get started with orignal package and get all dependencies:
```
git clone git@github.com:eduardvoicu/employee-tracker-database.git
cd employee-tracker-database
npm i
```
Create new file called .env that will store your MySQL server information:
```
touch .env
```
Format the contents of .env as follows. Make sure to substitute for YOUR MySQL server information:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASS=password
```
Import database schema and optional demo data points:
```
#this will log you in mysqld
mysql -u username -p

#import required schema
source schema.sql

#import optional demo data
source seeds.sql

#once complete, type exit to exit mysql server commmand environment
exit
```
Start application by running this command:
```
node index.js
```
## Application Preview

## Technology

Prerequsites:
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Additional Packages unique to this application:
- [ASCII-ART-FONT](https://www.npmjs.com/package/ascii-art-font)
- [Express](https://expressjs.com/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Console.Table](https://www.npmjs.com/package/console.table)

## License

MIT License

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## About
Eduard Voicu
- [GitHub](https://github.com/eduardvoicu)
- [LinkedIn](https://www.linkedin.com/in/eduardvoicu/)
