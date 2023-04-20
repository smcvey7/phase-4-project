class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :email, :name, :subject, :read, :created_at, :formatted_date

  def formatted_date
    date = object.created_at.strftime("%m/%d/%Y %H:%M")
    date
  end
end
