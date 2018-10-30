class AdmissionsController < ApplicationController
  
  def index

    students = Student.where(parent_id: params[:parent_id])
    puts students
    result = []
    programs = []
    students.each do |student|
      admissions = student.admissions
    
    
      admissions.each do |admission|

        program = Program.find_by(:id => admission.program_id)
        admission = Admission.find_by(:student_id => student.id, :program_id => program.id)
        progInfo={}
        progInfo[:id] = admission.id
        progInfo[:start_date] = program.start_date
        progInfo[:end_date] = program.end_date
        progInfo[:student_name] = student.name
        progInfo[:subject_name] = Subject.find_by(id: program.subject_id).name
        programs.push(progInfo)
      end
    end
    
    puts "DATA PASSING"

    render json: {programs: programs}

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
    admission = Admission.find_by(student_id: params[:student],program_id: params[:program])

    if !admission 
      @admission = Admission.create(
        student_id: params[:student],
        program_id: params[:program]
      )
    end

    redirect_to '/parents'
  end

end
