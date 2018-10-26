require 'json'

class AssignmentsController < ApplicationController
  
  def index
    if session[:user_type] == "parent"
      students = Student.where(:parent_id => params[:parent_id])
      studentsAssignments = []
      students.each do |student|
        assignments = AssignmentPerformance.select("*").joins(:assignment).where(:student_id => student.id)
        studentInfo ={assignments: assignments,
              student: student.name}
        studentsAssignments.push(studentInfo)
      end
      
      puts "DATA PASSING"

      render json: studentsAssignments
    elsif session[:user_type] == "teacher"
      result = []
      programs = Program.where(:teacher_id => params[:teacher_id])
      programs.each do |program|
        tassignment = AssignmentPerformance.joins(:student).joins(:assignment).select("assignment_performances.id, student_id, assignment_id, students.name as student, assignments.name as assignment, status, assignments.program_id").where("assignments.program_id = #{program.id}")

        

        result.concat(tassignment)
      end
      render json: result
    end  
   
  end

  def create

  end

  def update

  end

end
