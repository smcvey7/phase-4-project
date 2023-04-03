class SessionsController < ApplicationController

  def create
    camper = Camper.find_by(username: params[:username])
    if camper&.authenticate(params[:password])
      session[:camper_id] = camper.id
      render json: camper
    else
      render json: {error: "username/password not found"}, status: :unauthorized
    end
  end

  def destroy
    if session[:camper_id]
      session.delete :camper_id
      head :no_content
    else
      render json: {errors: ["no user logged in"]}, status: :unauthorized
    end
  end

end
