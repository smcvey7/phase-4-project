class AddUsernameToCampers < ActiveRecord::Migration[6.1]
  def change
    add_column :campers, :username, :string
  end
end
