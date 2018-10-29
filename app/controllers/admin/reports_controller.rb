class Admin::ReportsController < ApplicationController
  def index
    teachers = Teacher.all
    teacherNames = []
    totalEarningsInfo = []
    teacherEarningsInfo = []
    teachers.each do |teacher| 
      totalEarnings = 0
      teacherEarnings = 0
      teacherProgs = Program.where(teacher_id: teacher.id)
      teacherProgs.each do |teacherProg|
        totalEarnings = totalEarnings + (teacherProg.admissions.length * teacherProg.subject.cost)
        teacherEarnings = teacherEarnings + (teacher.hourly_wage * (teacherProg.end_date - teacherProg.start_date).to_i  * 2)  
      end
      teacherNames.push(teacher.name)
      totalEarningsInfo.push(totalEarnings)
      teacherEarningsInfo.push(teacherEarnings)
    end
    earningStats = { teacherNames: teacherNames,
                       totalEarnings: totalEarningsInfo,
                       teacherEarnings: teacherEarningsInfo}
    render json: earningStats
  end

end
