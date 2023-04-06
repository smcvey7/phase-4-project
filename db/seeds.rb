# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

camper_list = []

Activity.create([
  {
    name: "Basic Skills",
    dates: "time1",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Basic Skills",
    dates: "time2",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Basic Skills",
    dates: "time3",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Basic Skills",
    dates: "time4",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time1",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time2",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time3",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time4",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time1",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time2",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time3",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time4",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time1",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time2",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time3",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time4",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time1",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time2",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time3",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time4",
    age_group: "littles",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time1",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time2",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time3",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time4",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time1",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time2",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time3",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time4",
    age_group: "littles",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },{
    name: "Advanced Skills",
    dates: "time1",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Advanced Skills",
    dates: "time2",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Advanced Skills",
    dates: "time3",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Advanced Skills",
    dates: "time4",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time1",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time2",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time3",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Tennis",
    dates: "time4",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time1",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time2",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time3",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Baseball",
    dates: "time4",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time1",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time2",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time3",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Track",
    dates: "time4",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time1",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time2",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time3",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Soccer",
    dates: "time4",
    age_group: "bigs",
    activity_type: "sports",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time1",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time2",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time3",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Art",
    dates: "time4",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time1",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time2",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time3",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  },
  {
    name: "Science",
    dates: "time4",
    age_group: "bigs",
    activity_type: "discovery",
    spots: rand(10..50),
    cost: [100, 150, 200, 250][rand(0..3)]
  }
]
)

20.times do

  camper_list << {
    username: Faker::Twitter.screen_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    age: Faker::Number.within(range: 5..10),
    password: "password",
    password_confirmation: "password"
  }
end

# Camper.create!(camper_list)