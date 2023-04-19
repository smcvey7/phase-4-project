class AddAdminToCampers < ActiveRecord::Migration[6.1]
  def change
    add_column :campers, :admin, :boolean
  end
end
