class AddMotivationFunction < ActiveRecord::Migration[7.1]
  def change
    add_column :motivations, :function, :string
  end
end
