class ProfilesController < ApplicationController

  def index
    review_teacher = [];
    review = Review.joins(:parent).joins(:subject).select('reviews.id, parents.name, content, rating').where(teacher_id: params[:teacher_id])
    review_teacher.push(review);
    teacher = Teacher.find_by(id: params[:teacher_id])
    puts "found #{teacher.name}"

    review_teacher.push(teacher.name);
    render json: review_teacher
  end
end
