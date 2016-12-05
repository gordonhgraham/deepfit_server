'use strict'

/* eslint-disble max-statements, max-len */

exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable(`sports`, table => {
      table.integer(`id`).unique()
      table.string(`sport`)
    }),
    knex.schema.createTable(`users`, table => {
      table.increments()
      // table.integer(`data_id`).notNullable().unique() ***this is the ID currently used for users***
      table.string(`email`).notNullable().unique()
      table.string(`first_name`).defaultTo(``)
      table.string(`last_name`).defaultTo(``)
      table.integer(`sport_id`).references(`sports.id`).notNullable()
      table.timestamps(true, true)
    }),
    knex.schema.createTable(`goals`, table => {
      table.increments()
      table.integer(`user_id`).references(`users.id`)
      table.text(`goal`).defaultTo(``)
      table.timestamps()
    }),
    knex.schema.createTable(`emotions`, table => {
      table.integer(`id`).unique()
      table.string(`emotions`)
    }),
    knex.schema.createTable(`daily_reports`, table => {
      table.increments()
      table.integer(`user_id`).references(`users.id`)
      table.date(`activity_date`).notNullable()
      table.decimal(`TQR`).notNullable()
      table.integer(`RPE`).notNullable()
      table.integer(`sleep`).notNullable()
      table.integer(`soreness`).notNullable()
      table.integer(`food_h2o`).notNullable()
      table.text(`comments`).defaultTo(``)
      // table.not sure...? need to store a list of emotions, array saved as text? seperate table?
      table.integer(`workout`)
      table.integer(`brain_use`)
      table.integer(`ANS`)
      table.text(`workout_comments`).defaultTo(``)
      table.timestamps(true, true)
    })
  ])
}

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable(`daily_reports`),
    knex.schema.dropTable(`emotions`),
    knex.schema.dropTable(`goals`),
    knex.schema.dropTable(`sports`),
    knex.schema.dropTable(`users`)
  ])
}
