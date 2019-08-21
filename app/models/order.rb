class Order < ApplicationRecord
  belongs_to :BillToAddress
  belongs_to :ShipToAddress
end
