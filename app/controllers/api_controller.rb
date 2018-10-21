class ApiController < ApplicationController
  
  def index
    @assignment = AssignmentPerformance.all
    
    puts @assignment
    puts "DATA PASSING"
    render json: @assignment
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @assignment }
    # end
    # render component: '_assignment', props: {assignment: @assignment}
  end

end