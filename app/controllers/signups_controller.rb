class SignupsController < ApplicationController

  def index
    signups = Signup.all
    render json: signups
  end

  def create
    updates = Signup.update_registrations(params[:camper_id], params[:registrations])

    render json: updates, status: :created
  end

end
