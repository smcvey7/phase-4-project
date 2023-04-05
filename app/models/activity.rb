class Activity < ApplicationRecord
  has_many :signups
  has_many :campers, through: :signups

  validates :spots, numericality: { greater_than_or_equal_to: 0, message: "class full"}
end
