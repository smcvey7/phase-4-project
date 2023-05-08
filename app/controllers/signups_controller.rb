class SignupsController < ApplicationController
  before_action :authorize

  def create
    updates = Signup.update_registrations(session[:camper_id], params[:registrations]) 

    render json: updates, status: :created
  end

  def update
    signup = Signup.find_by(id: params[:id])
    signup.update(paid: params[:paid])
    render json: signup.camper
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :camper_id
  end

end
