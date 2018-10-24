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
    
    puts "DATA PASSING"

    students = Student.where(parent_id: params[:parent_id])
    prog = Program.all
    programs = []
    
    prog.each do |program|

      progInfo={}
      progInfo[:start_date] = program.start_date
      progInfo[:end_date] = program.end_date
      progInfo[:subject_name] = Subject.find_by(id: program.subject_id).name
      progInfo[:program_id] = program.id
      programs.push(progInfo)
      
    end
    newAdmInfo={programs: programs,students: students}
    puts "DATA PASSING"

    render json: newAdmInfo

  end

  def create

    puts "Creating Admission"
    @admission = Admission.create(
      student_id: params[:student],
      program_id: params[:program]
    )

    redirect_to '/parents'
  end

end
