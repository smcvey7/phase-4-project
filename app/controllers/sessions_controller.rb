class SessionsController < ApplicationController

  def create
    camper = Camper.find_by(username: params[:username])
    sessions[:camper_id] = camper.id
    render json: camper
  end

end
