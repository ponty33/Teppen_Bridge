class CreateAssignmentPerformances < ActiveRecord::Migration[5.1]
  def change
    create_table :assignment_performances do |t|
      t.integer :assignment_id
      t.integer :student_id
      t.string :status
      t.integer :score
      t.text :feedback

      t.timestamps
    end
  end
end
