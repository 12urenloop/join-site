class CreateMotivations < ActiveRecord::Migration[5.1]
  def change
    create_table :motivations do |t|
      t.string :name, null: false
      t.string :firstname, null: false
      t.string :email, null: false
      t.string :phone, null: false
      
      t.string :team
      t.text :motivation

      t.timestamps
    end
  end
end
