class Api::PatientsController < ApplicationController
    def index
        @patients = Patient.where(:physician_id: params[:id])
        render :index
    end
end
