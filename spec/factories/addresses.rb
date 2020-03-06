FactoryBot.define do
  factory :address do
    Address1 { "MyString" }
    Address2 { "MyString" }
    City { "MyString" }
    StateProvince { "MyString" }
    PostCode { "MyString" }
    user { nil }
  end
end
