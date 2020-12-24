# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Physician.destroy_all
Patient.destroy_all

physician1 = Physician.create!(name: "Algernop Krieger")
physician2 = Physician.create!(name: "Nick Riveiera")
physician1 = Physician.create!(name: "Julius Hibbert")

patient1 = Patient.create!(name: "Sterling Archer", time: "8:00AM", kind: "New Patient", physician_id: physician1.id)
patient2 = Patient.create!(name: "Cyril Figis", time: "9:00AM", kind: "Follow-up", physician_id: physician2.id)
patient3 = Patient.create!(name: "Ray Gilette", time: "10:00AM", kind: "New Patient", physician_id: physician3.id)
patient4 = Patient.create!(name: "Lane Kane", time: "12:00PM", kind: "New Patient", physician_id: physician1.id)
patient5 = Patient.create!(name: "Pam Poovey", time: "10:30AM", kind: "Follow-up", physician_id: physician2.id)
patient6 = Patient.create!(name: "Reggie Jackson", time: "11:00AM", kind: "New Patient", physician_id: physician3.id)
patient7 = Patient.create!(name: "Peter Min", time: "4:00PM", kind: "New Patient", physician_id: physician1.id)
patient8 = Patient.create!(name: "Drake Josh", time: "5:00PM", kind: "Follow-up", physician_id: physician2.id)
patient9 = Patient.create!(name: "Teresa Tran", time: "1:00PM", kind: "Follow-up", physician_id: physician3.id)
