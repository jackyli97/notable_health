json.patients do 
    @patients.each do |patient|
        json.set! patient.id do
            json.extract! patient, :id, :name, :time, :kind, :physician_id
        end
    end
end