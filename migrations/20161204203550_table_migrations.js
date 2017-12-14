'use strict'

/* eslint-disble max-statements, max-len, lines-arround-comment */

exports.up = (knex, Promise) => {
  return Promise.all([
    // knex.schema.createTable(`sports`, table => {
    //   table.integer(`id`).unique()
    //   table.string(`sport`)
    // }),
    knex.schema.createTable(`users`, table => {
      // table.integer(`data_id`).notNullable().unique() ***this is the ID currently used for users***
      // table.integer(`sport_id`).references(`sports.id`).notNullable()

      table.increments()
      // facebook, google authentication
      table.string(`email`).notNullable().unique()
      // encrypted password, required
      table.string(`first_name`).defaultTo(``)
      table.string(`last_name`).defaultTo(``)
      // workout locations, array of locations with name and coordinantes, not required
      // coaches, array of foriegn keys point to primary key in user table
      // primary needs ['Daily_Focus', 'Race_Day_Focus', 'Personal_Growth']
      // status ['pending', 'approved', 'declined', 'banned']
      // verified (bool)
      // admin (bool)

      table.timestamps(true, true)
    }),
    knex.schema.createTable(`goals`, table => {
      table.increments()
      table.integer(`user_id`).references(`users.id`)
      table.text(`goal`).defaultTo(``)
      // complete? (bool)
      table.timestamps()
    }),
    knex.schema.createTable(`emotions`, table => {
      table.integer(`id`).unique()
      // seed with exact emotions, leave possibility to add more later
      table.string(`emotions`)
    }),
    knex.schema.createTable(`daily_reports`, table => {
      table.increments()
      table.integer(`user_id`).references(`users.id`)
      // emotions, probably foreign key to emotions table

      // self care
      table.integer(`sleep_quality`).notNullable() // 1-5
      table.integer(`sleep_duration`).notNullable() // 1-5
      table.integer(`soreness`).notNullable() // 1-5 mobility?
      table.integer(`food_quality`).notNullable() // 1-5
      table.integer(`food_timing`).notNullable() // 1-5
      table.integer(`hydration`).notNullable() // 1-5
      table.text(`selfcare_comments`).defaultTo(``)

      // training
      table.date(`activity_date`).notNullable()
      table.integer(`rpe`).notNullable() // 1-5
      table.integer(`rpp`).notNullable() // 1-5
      table.bool(`coordination`)
      table.string(`hype_level`)
      table.string(`perception_of_time`)
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
