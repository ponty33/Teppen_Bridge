class AdmissionsController < ApplicationController
  
  def index

    student = Student.find_by(parent_id: params[:parent_id])
    admissions = student.admissions
    programs = []
    
    admissions.each do |admission|

      program = Program.find_by(:id => admission.program_id)
      progInfo={}
      progInfo[:start_date] = program.start_date
      progInfo[:end_date] = program.end_date
      progInfo[:student_name] = student.name
      progInfo[:subject_name] = Subject.find_by(id: program.subject_id).name
      programs.push(progInfo)
      
    end
   



    puts "DATA PASSING"

    render json: programs

  end

  def new
  end

  def create
  end

end
