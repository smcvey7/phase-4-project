class Camper < ApplicationRecord
  has_many :signups
  has_many :activities, through: :signups

  has_secure_password

  validates :username, {presence: true, uniqueness: true}
end
