class Api::PatientsController < ApplicationController
    def index
        physician_id = params[:id].to_i
        @patients = Patient.where(physician_id: physician_id)
        @patients = @patients.to_a
        render :index
    end
end
