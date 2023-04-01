class CampersController < ApplicationController

  def index
    campers = Camper.all
    render json: campers
  end

  def show
    camper = Camper.find_by(id: params[:id])
    render json: camper
  end

  def create
    camper = Camper.create(camper_params)
    if user.valid?
      session[:camper_id]= camper.id
      render json: camper, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def camper_params
    params.permit(:username, :first_name, :last_name, :password, :password_confirmation, :age)
  end

end
