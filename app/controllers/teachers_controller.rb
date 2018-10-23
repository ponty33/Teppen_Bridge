class TeachersController < ApplicationController
  def index
    redirect_to "/teachers/#{session[:user_id]}"
  end

  def new
  end

  def create
  end

  def show
  end

end
