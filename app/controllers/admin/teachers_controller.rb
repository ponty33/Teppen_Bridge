class Admin::TeachersController < ApplicationController
  
  def index
    teachers = Teacher.all


    render json: teachers
  end

  def create

    Teacher.create(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      hourly_wage: 1,
      img_url: 'www.gg'
    )

    redirect_to '/admin'
  end

end
