FactoryBot.define do
  factory :line_item do
    Order { nil }
    Item { nil }
    Quantity { "" }
    UnitPrice { "9.99" }
    UnitDiscount { "9.99" }
    LineTotal { "9.99" }
  end
end
