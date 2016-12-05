'use strict'

const express = require(`express`)
const router = express.Router()

/* CREATE report */
router.post(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* READ report */
router.get(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* UPDATE report */
router.patch(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* DELETE report */
router.delete(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

/* LIST reports */
router.get(`/`, (req, res, next) => {
  res.send(`respond with a resource`)
})

module.exports = router
