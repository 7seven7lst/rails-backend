class Api::V1::AppointmentsController < Api::V1::BaseController
  def index
    @appointments = current_user.appointments
  end
end