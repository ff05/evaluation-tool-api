# Student Evaluation Tool API

RESTful Express API for [Evaluation Tool](https://github.com/ff05/evaluation-tool) on top of MongoDB.

## Authentication

Create a User with the following attributes:

| Attribute | Type   | Description   |
|-----------|--------|---------------|
| name      | string | Full name     |
| email     | string | Email address |
| password  | string | Password      |

Use the following endpoints to deal with initial authentication and the user.

| HTTP Verb | Path        | Description |
|-----------|-------------|--------------|
| `POST`    | `/users`    | Create a user account |
| `POST`    | `/sessions` | Log in with email and password, and retrieve a JWT token |
| `GET`     | `/users/me` | Retrieve own user data |

To authorize further requests, use Bearer authentication with the provided JWT token:

```
Authorization: Bearer <token here>
```

_**Note**: See `db/seed.js` for an example._

## Groups

**Note:** See `models/group.js` for the Game schema attributes.

| HTTP Verb | Path | Description |
|-----------|------|--------------|
| `GET` | `/groups` | Retrieve all groups |
| `POST` | `/groups` | Create a group* |
| `GET` | `/groups/:id` | Retrieve a single group by it's `id` |
| | | _* Needs authentication_ |

## Students

**Note:** See `models/student.js` for the Game schema attributes.

| HTTP Verb | Path | Description |
|-----------|------|--------------|
| `GET` | `/groups/:id/students` | Retrieve all students |
| `POST` | `/groups/:id/students` | Create a student* |
| `GET` | `/groups/:id/students/:id` | Retrieve a single student by it's `id` |
| `PATCH` | `/groups/:id/students/:id` | Update a student by it's `id`* |
| `DELETE` | `/groups/:id/students/:id` | Delete a student by it's `id`* |
| | | _* Needs authentication_ |

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

_**Note**: Run `yarn run seed` to seed some initial groups and students._
