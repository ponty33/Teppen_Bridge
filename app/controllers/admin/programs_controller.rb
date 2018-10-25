class Admin::ProgramsController < ApplicationController
  def index
    list = []
    
    programs = Program.joins(:teacher).joins(:subject).select("programs.id, teachers.name as teacher, subjects.name as subject, programs.start_date, programs.end_date, programs.teacher_id, programs.subject_id").all
    list.push(programs)
    teachers = Teacher.all
    list.push(teachers)
    subjects = Subject.all
    list.push(subjects)
    puts "DATA PASSING"

    render json: list
  end

  def create
    Program.create(
      teacher_id: params[:teacher_id],
      subject_id: params[:subject_id],
      start_date: params[:start_date],
      end_date: params[:end_date]
    )

    redirect_to '/admin'
  end

end
