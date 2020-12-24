class Physician < ApplicationRecord
    validates :name, presence: true

    has_many :patients,
        primary_key: :id,
        foreign_key: :physician_id,
        class_name: :Patient
end