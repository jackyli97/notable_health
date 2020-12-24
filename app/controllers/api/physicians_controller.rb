class Api::PhysiciansController < ApplicationController
    def index
        @physicians = Physician.all
        render :index
    end
end
