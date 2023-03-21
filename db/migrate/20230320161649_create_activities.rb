class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.integer :minimum_age
      t.integer :maximum_age
      t.integer :length
      t.string :activity_img
      t.integer :capacity
      t.integer :cost
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end
