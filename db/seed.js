const request = require('superagent')
const user = require('./fixtures/user.json')
const students = require('./fixtures/students.json')
const groups = require('./fixtures/groups.json')

const createUrl = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
}

const createStudents = (token) => {
  return students.map((student) => {
    return request
      .post(createUrl('/students'))
      .set('Authorization', `Bearer ${token}`)
      .send(student)
      .then((res) => {
        console.log('Student seeded...', res.body.name)
      })
      .catch((err) => {
        console.error('Error seeding student!', err)
      })
  })
}

const createGroups= (token) => {
  return groups.map((group) => {
    return request
      .post(createUrl('/groups'))
      .set('Authorization', `Bearer ${token}`)
      .send(group)
      .then((res) => {
        console.log('Group seeded...', res.body.name)
      })
      .catch((err) => {
        console.error('Error seeding student!', err)
      })
  })
}

const authenticate = (email, password) => {
  request
    .post(createUrl('/sessions'))
    .send({ email, password })
    .then((res) => {
      console.log('Authenticated!')
      return [createGroups(res.body.token), createStudents(res.body.token)]

    })
    .catch((err) => {
      console.error('Failed to authenticate!', err.message)
    })
}

request
  .post(createUrl('/users'))
  .send(user)
  .then((res) => {
    console.log('User created!')
    return authenticate(user.email, user.password)
  })
  .catch((err) => {
    console.error('Could not create user', err.message)
    console.log('Trying to continue...')
    authenticate(user.email, user.password)
  })
