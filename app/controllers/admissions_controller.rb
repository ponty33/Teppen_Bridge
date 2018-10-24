class AdmissionsController < ApplicationController
  
  def index

    students = Student.where(parent_id: params[:parent_id])
    puts students
    result = []
    # admissions = student.admissions
    # programs = []
    
    # admissions.each do |admission|

    #   program = Program.find_by(:id => admission.program_id)
    #   progInfo={}
    #   progInfo[:start_date] = program.start_date
    #   progInfo[:end_date] = program.end_date
    #   progInfo[:student_name] = student.name
    #   progInfo[:subject_name] = Subject.find_by(id: program.subject_id).name
    #   programs.push(progInfo)
      
    # end
    students.each do |student|
      program = Program.joins(:subject).joins(:admissions).select("programs.id, start_date, end_date, subject_id, subjects.name as subject, admissions.student_id").find_by("admissions.student_id = #{student.id}")
      
      student = Student.find_by("id = #{student.id}")

      program = [:program => program, :student => student]
    

      result.concat(program)
    end

    puts "DATA PASSING"

    render json: result

  end

  def new
  end

  def create
  end

end
