class Review < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :reviews, :teachers
    add_foreign_key :reviews, :subjects
    add_foreign_key :reviews, :parents
  end
end
