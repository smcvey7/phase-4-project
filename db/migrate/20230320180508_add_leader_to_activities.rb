class AddLeaderToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :leader, :string
  end
end
