class CamperSerializer < ActiveModel::Serializer
  attributes :first_name, :age, :username

  has_many :signups
end
