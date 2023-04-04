class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :email, :name
end
