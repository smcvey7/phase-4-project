class CampersController < ApplicationController

  def index
    campers = Camper.all
    render json: campers
  end

  def show
    camper = Camper.find_by(id: params[:id])
    render json: camper
  end

end
