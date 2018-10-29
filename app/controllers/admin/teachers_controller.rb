class Admin::TeachersController < ApplicationController
  
  def index
    teachers = Teacher.all
    teachers_ratings = []
    
    teachers.each do |teacher|
      reviews = Review.where(:teacher_id => teacher.id)
      rate = []
      now_teacher = {}
      if reviews.length > 0
        reviews.each do |review|
          rate.push(review.rating)
         
        end
      end
      
      if reviews.length > 0
        rate = (rate.sum)/reviews.length
      end

      now_teacher[:id] = teacher.id
      now_teacher[:img_url] = teacher.img_url
      now_teacher[:name] = teacher.name
      now_teacher[:email] = teacher.email
      now_teacher[:hourly_wage] = teacher.hourly_wage
      now_teacher[:avg_rating] = rate
      teachers_ratings.push(now_teacher)

    end

    render json: teachers_ratings
  end

  def create

    Teacher.create(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      hourly_wage: 25,
      img_url: 'www.gg'
    )

    redirect_to '/admin'
  end

end
