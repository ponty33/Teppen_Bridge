class CreateTeachers < ActiveRecord::Migration[5.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :email
      t.string :password
      t.integer :hourly_wage
      t.string :img_url

      t.timestamps
    end
  end
end
