class Api::OrdersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.orders
  end

  def create
    order = current_user.order.new(order_params)
    
    if order.save
      render json: order
    else
      render json: order.errors, status:422
    end
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :product_ids =>[])
  end
end
