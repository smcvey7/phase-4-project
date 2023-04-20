class ActivitiesController < ApplicationController
  before_action :authorize

  def index
    activities = Activity.all
    render json: activities
  end

  def show
    activity = Activity.find_by(id: params[:id])
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session[:admin]
  end

end
