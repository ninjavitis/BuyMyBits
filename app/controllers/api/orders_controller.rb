class Api::OrdersController < ApplicationController
  def index
    render json: Order.where(user_id:params[:user_id])
  end
end
