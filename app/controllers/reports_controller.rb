class Admin::ReportsController < ApplicationController
  def index
    profitsData = []
    
    teachers = Teacher.all
    
    teachers.each do |teacher| 
      totalEarnings = 0
      teacherEarnings = 0
      teacherProgs = Program.where(teacher_id: teacher.id)
      teacherProgs.each do |teacherProg|
        totalEarnings = totalEarnings + (teacherProg.admissions.length * teacherProg.subject.cost)
        teacherEarnings = teacherEarnings + (teacher.hourly_wage * (teacherProg.end_date - teacherProg.start_date) * 2)  
      end
      teacherStats = { 
        teacherName: teacher.name,
        totalEarnings: totalEarnings,
        teacherEarnings: teacherEarnings
      }
      profitsData.push(teacherEarnings)
    end
    render json: profitsData
  end

end
