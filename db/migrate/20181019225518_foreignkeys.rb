class Foreignkeys < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :admissions, :programs
    add_foreign_key :admissions, :students
    add_foreign_key :programs, :teachers
    add_foreign_key :programs, :subjects
    add_foreign_key :assignment_performances, :assignments
    add_foreign_key :assignment_performances, :students
    add_foreign_key :assignments, :programs

    

  end
end
