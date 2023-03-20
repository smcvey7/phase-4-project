class CreateCampers < ActiveRecord::Migration[6.1]
  def change
    create_table :campers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.text :intro
      t.string :profile_img

      t.timestamps
    end
  end
end
