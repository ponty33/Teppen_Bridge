require 'json'

class AssignmentsController < ApplicationController
  
  def index
    student = Student.find_by(parent_id: params[:parent_id])
    assignments = AssignmentPerformance.where(:student_id => student.id)
    puts "DATA PASSING"

    render json: assignments
   
  end

end
