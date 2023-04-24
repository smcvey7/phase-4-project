class ActivitiesController < ApplicationController
  before_action :authorize

  def index
    activities = Activity.all
    render json: activities
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session[:camper_id]
  end

end
