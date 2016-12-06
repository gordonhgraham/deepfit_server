/* eslint-disable camelcase */
'use strict'

const knex = require(`../knex`)

/* CREATE */
const createReport = (newReport) => {
  return knex(`daily_reports`).insert(newReport)
}

/* READ */
const readReport = (id) => {
}

/* UPDATE */
const updateReport = (id, changes) => {
}

/* DELETE */
const deleteReport = (id) => {
  return knex(`daily_reports`).where(`id`, id).del()
}

/* LIST */
const listReports = () => {
}

module.exports = {
  createReport,
  readReport,
  updateReport,
  deleteReport,
  listReports,
}
