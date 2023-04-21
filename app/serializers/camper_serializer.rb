class CamperSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :username, :admin

  has_many :signups
  has_many :activities
end
