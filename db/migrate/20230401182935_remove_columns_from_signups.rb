class RemoveColumnsFromSignups < ActiveRecord::Migration[6.1]
  def change
    remove_columns :signups, :time, :leader
  end
end
