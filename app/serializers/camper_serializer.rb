class CamperSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :age, :username

  has_many :signups
  has_many :activities
end
