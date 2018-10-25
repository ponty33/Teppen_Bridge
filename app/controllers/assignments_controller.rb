require 'json'

class AssignmentsController < ApplicationController
  
  def index
    if session[:user_type] == "parent"
      student = Student.find_by(parent_id: params[:parent_id])
      assignments = AssignmentPerformance.select("*").joins(:assignment).where(:student_id => student.id)
      puts "DATA PASSING"

      render json: assignments
    elsif session[:user_type] == "teacher"
      result = []
      programs = Program.where(:teacher_id => params[:teacher_id])
      programs.each do |program|
        tassignment = AssignmentPerformance.joins(:student).joins(:assignment).select("assignment_performances.id, student_id, assignment_id, students.name as student, assignments.name as assignment, status, score, assignments.program_id").where("assignments.program_id = #{program.id}")

        

        result.concat(tassignment)
      end
      render json: result
    end  
   
  end

  def create

  end

  def update
    assignment = AssignmentPerformance.find(params[:id])
    assignment.update_attributes(assignment_params)
    render json: assignment
  end

  private

  def assignment_params
    params.require(:assignment_performance).permit(:assignment_id, :student_id, :status, :score, :feedback)
  end

end
