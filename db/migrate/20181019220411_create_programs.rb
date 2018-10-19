class CreatePrograms < ActiveRecord::Migration[5.1]
  def change
    create_table :programs do |t|
      t.date :start_date
      t.date :end_date
      t.integer :teacher_id
      t.integer :subject_id

      t.timestamps
    end
  end
end
