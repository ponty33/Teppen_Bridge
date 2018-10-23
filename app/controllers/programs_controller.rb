class ProgramsController < ApplicationController

  def index
    programs = Program.joins(:subject).select('*').where(teacher_id: params[:teacher_id])

    render json: programs
  end

end
