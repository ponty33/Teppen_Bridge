class CreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :assignments do |t|
      t.string :name
      t.text :content
      t.date :start_date
      t.date :end_date
      t.integer :program_id

      t.timestamps
    end
  end
end
