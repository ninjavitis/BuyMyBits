class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :sku
      t.string :name
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
