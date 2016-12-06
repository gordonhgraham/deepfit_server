'use strict'

const express = require(`express`)
const router = express.Router()
const queries = require(`../queries/reports.js`)

/* CREATE report */
router.post(`/`, (req, res, next) => {
  const newReport = req.body

  queries.createReport(newReport)
    .then(data => {
      res.send(`Report Saved`, newReport)
    })
    .catch(err => { return next(err) })
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
