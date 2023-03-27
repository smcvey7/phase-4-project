class SessionsController < ApplicationController

  def create
    camper = Camper.find_by(username: params[:username])
    session[:camper_id] = camper.id
    cookies[:camper_id] = camper.id
    render json: camper
  end

end
