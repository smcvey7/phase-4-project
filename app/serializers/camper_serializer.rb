class CamperSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :age, :intro, :profile_img

  has_many :activities
end
