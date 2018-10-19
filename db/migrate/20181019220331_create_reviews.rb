class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :content
      t.integer :rating
      t.integer :parent_id
      t.integer :teacher_id
      t.integer :subject_id

      t.timestamps
    end
  end
end
