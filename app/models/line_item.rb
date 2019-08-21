class LineItem < ApplicationRecord
  belongs_to :Order
  belongs_to :Item
end
