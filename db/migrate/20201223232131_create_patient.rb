class CreatePatient < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name, null: false
      t.string :time, null: false
      t.string :kind, null: false
      t.integer :physician_id, null: false
    end
  end
end
