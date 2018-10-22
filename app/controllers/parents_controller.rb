class ParentsController < ApplicationController
  
  def index
    redirect_to "/parents/#{session[:user_id]}"
  end

  def new
  end

  def create
  end

  def show
  end

end
