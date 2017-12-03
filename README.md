# Student Evaluation Tool API

API for Student Evaluation Tool found here: https://github.com/ff05/evaluation-tool

## Database Structure

1. Group

  * batch: String
  * startDate: Date
  * endDate: Date
  
2. Student
  * name: String
  * picture: String
  * group: Number
  
3. User
 * name: String
 * email: String
 * createdAt: Date
 * updatedAt: Date

## Running Locally

Make sure you have: 
 * [MongoDB](https://docs.mongodb.com/), [Yarn](https://yarnpkg.com/en/) and [NodeJS](https://nodejs.org/en/) installed.
 * [evaluation-tool](https://github.com/ff05/evaluation-tool) installed

```bash
sudo service mongod start
git clone git@github.com:ff05/evaluation-tool-api.git
cd evaluation-tool-api
yarn install
yarn start
yarn seed
```
