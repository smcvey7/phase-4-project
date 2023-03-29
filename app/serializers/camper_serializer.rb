class CamperSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :profile_img, :username, :registrations

  has_many :activities
end
