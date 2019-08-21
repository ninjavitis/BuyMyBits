FactoryBot.define do
  factory :order do
    BillToAddress { nil }
    ShipToAddress { nil }
    SubTotal { "9.99" }
    TaxAmt { "9.99" }
    DeliveryAmt { "9.99" }
    Total { "9.99" }
  end
end
