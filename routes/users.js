'use strict'

const express = require(`express`)
const router = express.Router()

/* CREATE USER */
router.post(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* READ USER */
router.get(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* UPDATE USER */
router.patch(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* DELETE USER */
router.delete(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* LIST USERS */
router.get(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

module.exports = router
