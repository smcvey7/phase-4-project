class Camper < ApplicationRecord
  has_many :signups
  has_many :activities, through: :signups

  # validates :username, {presence: true, uniqueness: true}
end
