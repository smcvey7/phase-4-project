class AddPasswordDigestToCampers < ActiveRecord::Migration[6.1]
  def change
    add_column :campers, :password_digest, :string
  end
end
