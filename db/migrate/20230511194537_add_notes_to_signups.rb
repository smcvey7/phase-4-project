class AddNotesToSignups < ActiveRecord::Migration[6.1]
  def change
    add_column :signups, :notes, :string
  end
end
