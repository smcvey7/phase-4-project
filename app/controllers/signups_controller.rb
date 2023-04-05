class SignupsController < ApplicationController

  def index
    signups = Signup.all
    render json: signups
  end

  def create
    updates = Signup.update_registrations(params[:camper_id], params[:registrations])

    render json: updates, status: :created
  end


  private
  # def signup_params
  #   params.permit(:camper_id, :registrations, :signup)
  # end
end
