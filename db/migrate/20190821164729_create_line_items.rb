class CreateLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :line_items do |t|
      t.belongs_to :Order, foreign_key: true
      t.references :Item, foreign_key: true
      t.int :Quantity
      t.decimal :UnitPrice, precision: 8, scale: 2
      t.decimal :UnitDiscount, precision: 8, scale: 2
      t.decimal :LineTotal, precision: 8, scale: 2

      t.timestamps
    end
  end
end
