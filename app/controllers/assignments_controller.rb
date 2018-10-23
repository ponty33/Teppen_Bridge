require 'json'

class AssignmentsController < ApplicationController
  
  def index
    if session[:user_type] == "parent"
      student = Student.find_by(parent_id: params[:parent_id])
      assignments = AssignmentPerformance.select("*").joins(:assignment).where(:student_id => student.id)
      puts "DATA PASSING"

      render json: assignments
    else 
      
    end  
   
  end

  def create

  end

  def update

  end

end
