class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.integer :activity_id
      t.integer :camper_id
      t.string :time
      t.string :leader

      t.timestamps
    end
  end
end
