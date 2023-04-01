class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :contact
end
