class CreateItemPriceHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :item_price_histories do |t|
      t.string :StartDate
      t.string :EndDate
      t.string :ListPrice
      t.belongs_to :item, foreign_key: true

      t.timestamps
    end
  end
end
