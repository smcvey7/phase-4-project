class SignupSerializer < ActiveModel::Serializer
  attributes :id, :activity_id, :camper_id, :time, :leader

  belongs_to :camper
  belongs_to :activity
end
