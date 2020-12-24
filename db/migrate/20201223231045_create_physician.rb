class CreatePhysician < ActiveRecord::Migration[5.2]
  def change
    create_table :physicians do |t|
      t.string :name, null: false
    end
  end
end
