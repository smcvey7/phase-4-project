class AddColumnsToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :dates, :string
    add_column :activities, :age_group, :string
    add_column :activities, :type, :string
    add_column :activities, :spots, :integer
  end
end
