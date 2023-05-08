# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

camper_list = [{
  username: "admin",
  first_name: "Steven",
  last_name: "McVey",
  age: 100,
  password: "password",
  password_confirmation: "password",
  admin: true
  },
  {
    username: "smcvey",
    first_name: "Steven",
    last_name: "McVey",
    age: 5,
    password: "password",
    password_confirmation: "password",
    admin: false
    }
]

activity_list = [
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

message_list = []

20.times do
  message_list << {
    name: Faker::Name.first_name ,
    email: Faker::Twitter.screen_name + "@gmail.com",
    message: Faker::Movies::HarryPotter.quote,
    subject: Faker::Lorem.sentence,
    read: false
  }
end

200.times do

  camper_list << {
    username: Faker::Twitter.unique.screen_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    age: Faker::Number.within(range: 5..7),
    password: "password",
    password_confirmation: "password",
    admin: false
  }
end

200.times do

  camper_list << {
    username: Faker::Twitter.unique.screen_name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    age: Faker::Number.within(range: 8..10),
    password: "password",
    password_confirmation: "password",
    admin: false
  }
end

Camper.create!(camper_list)
Activity.create!(activity_list)
Message.create!(message_list)

big_activities = {
  time1: [29, 33, 37, 41, 45, 49, 53],
  time2: [30, 34, 38, 42, 46, 50, 54],
  time3: [31, 35, 39, 43, 47, 51, 55],
  time4: [32, 36, 40, 44, 48, 52, 56]
}
little_activities = {
  time1: [1, 5, 9, 13, 17, 21, 25],
  time2: [2, 6, 10 ,14, 18, 22, 26],
  time3: [3, 7, 11, 15, 19, 23, 27],
  time4: [4, 8, 12, 16, 20, 24, 28]
}
signup_list = []
random_boolean = [true, false].sample

for a in 2..201 do
    signup_list << {
      camper_id: a,
      activity_id: little_activities[:time1][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a,
      activity_id: little_activities[:time2][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a,
      activity_id: little_activities[:time3][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a,
      activity_id: little_activities[:time4][rand(0..6)],
      paid: random_boolean
    }

    signup_list << {
      camper_id: a+200,
      activity_id: big_activities[:time1][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a+200,
      activity_id: big_activities[:time2][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a+200,
      activity_id: big_activities[:time3][rand(0..6)],
      paid: random_boolean
    }
    signup_list << {
      camper_id: a+200,
      activity_id: big_activities[:time4][rand(0..6)],
      paid: random_boolean
    }

end

Signup.create!(signup_list)