class MessagesController < ApplicationController

  def index
    messages = Message.all
    render json: messages
  end

  def show
    message = Message.find_by(id: params[:id])
    render json: message
  end

  def create
    message = Message.create(message_params)
    render json: message, status: :created
  end

  def destroy
    message  = Message.find_by(id: params[:id])
    message.delete
    head :no_content
  end

  private
  def message_params
    params.permit(:content, :contact)
  end
end
