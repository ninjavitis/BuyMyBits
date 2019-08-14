class Api::ItemsController < ApplicationController
  def index
    Item.all
  end
end
