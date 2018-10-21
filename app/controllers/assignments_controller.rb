require 'json'

class AssignmentsController < ApplicationController
  
  def index
    @assignment = Parent.joins(:students).all
    
    puts "DATA PASSING"

    render json: @assignment
   
  end

end
