class AddCostToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :cost, :float
  end
end
