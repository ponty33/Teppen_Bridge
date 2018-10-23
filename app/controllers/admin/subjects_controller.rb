class Admin::SubjectsController < ApplicationController

  def index
    subjects = Subject.all


    render json: subjects
  end

  def create
  end
end