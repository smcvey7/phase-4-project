class ChangeTimeToStringFromSessions < ActiveRecord::Migration[6.1]
  def change
    change_column :sessions, :time, :string
  end
end
