FactoryBot.define do
  factory :item_price_history do
    StartDate { "MyString" }
    EndDate { "MyString" }
    ListPrice { "MyString" }
    item { nil }
  end
end
