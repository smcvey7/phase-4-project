class UpdateActivitiesColumns < ActiveRecord::Migration[6.1]
  def change
    remove_columns :activities, :minimum_age, :maximum_age, :length, :activity_img, :capacity, :description, :location, :leader, :time
  end
end