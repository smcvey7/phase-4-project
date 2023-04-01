class RemoveColumnsFromCampers < ActiveRecord::Migration[6.1]
  def change
    remove_columns :campers, :intro, :profile_img, :registrations
  end
end
