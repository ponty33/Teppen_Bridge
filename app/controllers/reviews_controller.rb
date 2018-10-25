class ReviewsController < ApplicationController

  def index
    review_teacher = [];
    review = Review.joins(:parent).joins(:subject).select('reviews.id, parents.name, content, rating').where(teacher_id: params[:teacher_id])
    review_teacher.push(review);
    teacher = Teacher.find_by(id: params[:teacher_id])
    puts "found #{teacher.name}"

    review_teacher.push(teacher.name);
    render json: review_teacher
  end

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