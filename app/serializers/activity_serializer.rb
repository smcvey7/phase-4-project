class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :dates, :age_group, :activity_type, :spots

  has_many :campers

end
