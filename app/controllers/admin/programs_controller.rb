class Admin::ProgramsController < ApplicationController
  def index
    programs = Program.joins(:teacher).joins(:subject).select("programs.id, teachers.name as teacher, subjects.name as subject, programs.start_date, programs.end_date, programs.teacher_id, programs.subject_id")


    render json: programs
  end

  def create
  end

end
