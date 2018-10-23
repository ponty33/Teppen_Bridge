class Assignment < ApplicationRecord
  belongs_to :program
  has_many :assignment_performances

end
