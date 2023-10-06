class Motivation < ApplicationRecord
  validates :name, presence: true
  validates :firstname, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :school, presence: true
  validates :opleiding, presence: true
  validates :studyyears, presence: true
end
