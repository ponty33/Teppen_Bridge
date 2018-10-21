require 'json'

class AssignmentsController < ApplicationController
  
  def index
    @assignment = AssignmentPerformance.all
    
    #puts @assignment
    puts "DATA PASSING"
    # byebug
    puts "Session #{session}"
    render json: @assignment
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @assignment }
    # end
    # render component: '_assignment', props: {assignment: @assignment}
  end

end
