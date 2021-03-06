require 'spec_helper'

describe Order do
  let(:order) { FactoryBot.build :order }
  subject { order }

  it { should respond_to(:total) }
  it { should respond_to(:user_id) }

  it { should validate_presence_of :user_id }
  it { should validate_presence_of :total}
  it { should validate_numericality_of(:total).is_greater_than_or_equal_to(0) }

  it { should belong_to :user }
end