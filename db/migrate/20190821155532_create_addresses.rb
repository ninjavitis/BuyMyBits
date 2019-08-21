class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :Address1
      t.string :Address2
      t.string :City
      t.string :StateProvince
      t.string :PostCode
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
