class ActivitiesController < ApplicationController

  def index
    activities = Activity.all
    render json: activities
  end

  def show
    activity = Activity.find_by(id: params[:id])
  end

end
