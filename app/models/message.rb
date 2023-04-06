class Message < ApplicationRecord

  validates :email, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: "email invalid"}
  validates :message, {presence: true}
  validates :name, presence: true
end
