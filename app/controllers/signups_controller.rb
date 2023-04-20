class SignupsController < ApplicationController
  before_action :authorize

  def index
    return render json: { error: "Not authorized" }, status: :unauthorized unless session[:admin]
    signups = Signup.all
    render json: signups
  end

  def create
    updates = Signup.update_registrations(session[:camper_id], params[:registrations]) 

    render json: updates, status: :created
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :camper_id
  end

end
