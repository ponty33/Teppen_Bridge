class CreateAssignmentPerformances < ActiveRecord::Migration[5.1]
  def change
    create_table :assignment_performances do |t|
      t.string :status
      t.integer :score
      t.text :feedback
      t.integer :assignment_id
      t.integer :student_id

      # add_reference :assignment_id, :parents, index: true, foreign_key: true
      # add_reference :student_id, :students, index: true, foreign_key: true

      t.timestamps
    end
  end
end
