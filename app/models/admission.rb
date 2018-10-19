class Admission < ApplicationRecord
  belongs_to :program
  belongs_to :student

end
