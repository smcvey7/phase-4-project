# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_29_204222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.integer "minimum_age"
    t.integer "maximum_age"
    t.integer "length"
    t.string "activity_img"
    t.integer "capacity"
    t.integer "cost"
    t.text "description"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "leader"
    t.string "time"
  end

  create_table "campers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.text "intro"
    t.string "profile_img"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.json "registrations"
  end

  create_table "signups", force: :cascade do |t|
    t.integer "activity_id"
    t.integer "camper_id"
    t.string "time"
    t.string "leader"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
