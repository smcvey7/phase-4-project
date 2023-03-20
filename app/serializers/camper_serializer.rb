class CamperSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :intro, :profile_img
end
