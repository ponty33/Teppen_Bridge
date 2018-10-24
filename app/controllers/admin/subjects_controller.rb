class Admin::SubjectsController < ApplicationController

  def index
    subjects = Subject.all


    render json: subjects
  end

  def create
    Subject.create(
      name: params[:name],
      cost: params[:cost]
    )

    redirect_to '/admin'
  end
end