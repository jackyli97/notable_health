class Patient < ApplicationRecord
    validates :name, :time, :kind, :physician_id, presence: true

    belongs_to :physician,
        primary_key: :id,
        foreign_key: :physician_id,
        class_name: :Physician
        
end