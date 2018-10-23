class Program < ApplicationRecord
  belongs_to :teacher
  belongs_to :subject
  has_many :assignments

end
