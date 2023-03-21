class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :minimum_age, :maximum_age, :length, :activity_img, :capacity, :cost, :description, :location

  has_many :campers
  has_many :signups

end
