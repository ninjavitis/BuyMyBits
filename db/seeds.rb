# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  Item.create(
    sku: '00-000-0000',
    name: Faker::Coffee.blend_name,
    description: Faker::Coffee.notes,
    image: Faker::LoremFlickr.grayscale_image(size: "200x200", search_terms: ['woodworking']),
    cost: rand(1...14) * 0.50
    )
end