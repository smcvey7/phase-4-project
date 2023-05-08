class AddColumnPaidToSignups < ActiveRecord::Migration[6.1]
  def change
    add_column :signups, :paid, :boolean
  end
end
