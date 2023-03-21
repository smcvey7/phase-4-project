class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.integer :activity_id
      t.integer :camper_id
      t.datetime :time
      t.string :leader

      t.timestamps
    end
  end
end
