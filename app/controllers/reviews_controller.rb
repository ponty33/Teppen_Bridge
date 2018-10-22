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
    @review = Review.create(
      teacher_id: params[:teacher_id],
      content: params[:content],
      rating: params[:rating],
      parent_id: params[:parent_id],
      subject_id: params[:subject_id]
    )

    redirect_to '/parents'
  end

end
