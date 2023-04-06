class Camper < ApplicationRecord
  has_many :signups
  has_many :activities, through: :signups

  has_secure_password

  validates :username, {presence: true, uniqueness: true}
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :age, presence: true, numericality: {in: 5..10, message: "camper's age must be between 5 and 10"}
end
