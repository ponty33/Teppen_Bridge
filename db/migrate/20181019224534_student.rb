class Student < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :students, :parents
  end
end
