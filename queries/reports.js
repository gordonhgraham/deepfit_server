/* eslint-disable camelcase */
'use strict'

const knex = require(`../knex`)

/* CREATE */
const createReport = (newReport) => {
  return knex(`daily_reports`).insert(newReport)
}

/* READ */
const readReport = (id) => {
  return knex(`daily_reports`)
  .innerJoin(`users`, `users.id`, `daily_reports.user_id`)
  .innerJoin(`emotions`, `` )
  .select([`daily_reports.id`, `users.name`, `title`,
    `description`, `image`, `votes`, `daily_reports.updated_at`])
  .first().where(`daily_reports.id`, id)
}

/* UPDATE */
const updateReport = (id, changes) => {
  changes.updated_at = new Date()

  return knex(`daily_reports`).where(`id`, id).update(changes)
}

/* DELETE */
const deleteReport = (id) => {
  return knex(`daily_reports`).where(`id`, id).del()
}

/* LIST */
const listReports = () => {
  return knex(`daily_reports`)
  .innerJoin(`users`, `users.id`, `daily_reports.user_id`)
  .select([`daily_reports.id`, `users.name`, `title`,
    `description`, `image`, `votes`, `daily_reports.updated_at`])
  .orderBy(`daily_reports.created_at`, `asc`)
}

module.exports = {
  createReport,
  readReport,
  updateReport,
  deleteReport,
  listReports,
}
