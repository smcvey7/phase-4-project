class UpdateColumnsInMessages < ActiveRecord::Migration[6.1]
  def change
    rename_column :messages, :contact, :email
    rename_column :messages, :content, :message
    change_column :messages, :message, :text
    add_column :messages, :name, :string
  end
end
