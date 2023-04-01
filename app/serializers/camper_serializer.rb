class CamperSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :username, :password_digest

  has_many :activities
end
