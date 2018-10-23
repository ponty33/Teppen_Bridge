class Subject < ApplicationRecord
  has_many :programs
  has_many :reviews
end
