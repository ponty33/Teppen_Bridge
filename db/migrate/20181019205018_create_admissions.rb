class CreateAdmissions < ActiveRecord::Migration[5.1]
  def change
    create_table :admissions do |t|
      t.integer :program_id
      t.integer :student_id

      t.timestamps
    end
  end
end
