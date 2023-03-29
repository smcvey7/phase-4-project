class AddRegistrationsToCampers < ActiveRecord::Migration[6.1]
  def change
    add_column :campers, :registrations, :json
  end
end
