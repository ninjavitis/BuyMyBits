class Order < ApplicationRecord
  belongs_to :BillToAddress
  belongs_to :ShipToAddress
  belongs_to :user
  has_many :items

  validates :user_id, presence: true
end
