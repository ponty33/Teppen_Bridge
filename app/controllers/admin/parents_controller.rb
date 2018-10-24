class Admin::ParentsController < ApplicationController
  def index
    
    result = []
    
    parents = Parent.select(
      "parents.id, 
      parents.name, 
      parents.email"
    ).all


    parents.each do |parent|
      
      parent = [:parent => parent, :student => Student.where("parent_id = #{parent.id}")]
      
      result.concat(parent)
    end
    render json: result
  end
end
