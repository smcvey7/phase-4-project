class MessagesController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create]

  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.create(message_params)
    if message.valid?
      render json: message, status: :created
    else
      render json: {errors: message.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    message  = Message.find_by(id: params[:id])
    message.delete
    head :no_content
  end

  def update
    puts "params", params
    message = Message.find_by(id: params[:id])
    message.update(read: params[:read])

    render json: message, status: :ok
  
  end

  private
  def message_params
    params.permit(:message, :email, :name, :subject, :read)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session[:admin]
  end

end
