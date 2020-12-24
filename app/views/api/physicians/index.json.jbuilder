json.physicians do 
    @physicians.each do |physician|
        json.set! physician.id do
            json.extract! physician, :id, :name
        end
    end
end