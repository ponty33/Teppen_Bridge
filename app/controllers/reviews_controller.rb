class ReviewsController < ApplicationController
  
  def new
    list = []
    teachers = Teacher.all
    list.push(teachers)
    subjects = Subject.all
    list.push(subjects)
    puts "DATA PASSING"

    render json: list
  end

  def create
    redirect_to 
  end

end
