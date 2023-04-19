class ChangeCampersColumnAdmin < ActiveRecord::Migration[6.1]
  def change
    change_column :campers, :admin, :boolean, default: false
  end
end
