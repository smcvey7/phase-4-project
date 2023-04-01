# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

camper_list = []

Activity.create(
  {
    name: "basicSkillsLittles",
    dates: "time1",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "basicSkillsLittles",
    dates: "time2",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "basicSkillsLittles",
    dates: "time3",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "basicSkillsLittles",
    dates: "time4",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisLittles",
    dates: "time1",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisLittles",
    dates: "time2",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisLittles",
    dates: "time3",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisLittles",
    dates: "time4",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballLittles",
    dates: "time1",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballLittles",
    dates: "time2",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballLittles",
    dates: "time3",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballLittles",
    dates: "time4",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackLittles",
    dates: "time1",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackLittles",
    dates: "time2",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackLittles",
    dates: "time3",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackLittles",
    dates: "time4",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerLittles",
    dates: "time1",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerLittles",
    dates: "time2",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerLittles",
    dates: "time3",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerLittles",
    dates: "time4",
    age_group: "littles",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "artLittles",
    dates: "time1",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artLittles",
    dates: "time2",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artLittles",
    dates: "time3",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artLittles",
    dates: "time4",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceLittles",
    dates: "time1",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceLittles",
    dates: "time2",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceLittles",
    dates: "time3",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceLittles",
    dates: "time4",
    age_group: "littles",
    type: "discovery",
    spots: rand(10..50)
  },{
    name: "advancedSkillsBigs",
    dates: "time1",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "advancedSkillsBigs",
    dates: "time2",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "advancedSkillsBigs",
    dates: "time3",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "advancedSkillsBigs",
    dates: "time4",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisBigs",
    dates: "time1",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisBigs",
    dates: "time2",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisBigs",
    dates: "time3",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "tennisBigs",
    dates: "time4",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballBigs",
    dates: "time1",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballBigs",
    dates: "time2",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballBigs",
    dates: "time3",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "baseballBigs",
    dates: "time4",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackBigs",
    dates: "time1",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackBigs",
    dates: "time2",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackBigs",
    dates: "time3",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "trackBigs",
    dates: "time4",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerBigs",
    dates: "time1",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerBigs",
    dates: "time2",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerBigs",
    dates: "time3",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "soccerBigs",
    dates: "time4",
    age_group: "bigs",
    type: "sports",
    spots: rand(10..50)
  },
  {
    name: "artBigs",
    dates: "time1",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artBigs",
    dates: "time2",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artBigs",
    dates: "time3",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "artBigs",
    dates: "time4",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceBigs",
    dates: "time1",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceBigs",
    dates: "time2",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceBigs",
    dates: "time3",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },
  {
    name: "scienceBigs",
    dates: "time4",
    age_group: "bigs",
    type: "discovery",
    spots: rand(10..50)
  },

)

20.times do

  camper_list << {
    username: Faker::Twitter.screen_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    age: Faker::Number.within(range: 5..10)
  }
end

Camper.create!(camper_list)