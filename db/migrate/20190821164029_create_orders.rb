class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.references :BillToAddress, foreign_key: true
      t.references :ShipToAddress, foreign_key: true
      t.decimal :SubTotal, precision: 8, scale: 2
      t.decimal :TaxAmt
      t.decimal :DeliveryAmt, precision: 6, scale: 2
      t.decimal :Total, precision: 8, scale: 2

      t.timestamps
    end
  end
end
