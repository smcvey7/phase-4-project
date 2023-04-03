class Message < ApplicationRecord

  validates :contact, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: "invalid email"}
  validates :content, {presence: true}
end
