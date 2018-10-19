class CreateAdmissions < ActiveRecord::Migration[5.1]
  def change
    create_table :admissions do |t|
      t.integer :program_id
      t.integer :student_id
      
      
      # add_reference :program_id, :programs, index: true, foreign_key: true
      # add_reference :student_id, :students, index: true, foreign_key: true

      t.timestamps
    end
  end
end
