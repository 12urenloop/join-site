class GetMoreData < ActiveRecord::Migration[5.2]
  def up
    add_column :motivations, :school, :string
    add_column :motivations, :opleiding, :string
    add_column :motivations, :studyyears, :integer
  end

  def down
    remove_column :motivations, :school
    remove_column :motivations, :opleiding
    remove_column :motivations, :studyyears
  end
end
