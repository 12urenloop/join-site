class MotivationsController < ApplicationController
  http_basic_authenticate_with name: "admin", password: ENV['APP_ADMIN_PASSWORD'], only: :index

  def new
    @motivation = Motivation.new
  end

  def create
    @motivation = Motivation.new motivation_params
    if @motivation.save
      redirect_to success_path
    else
      render :new
    end
  end

  def index
    @motivations = Motivation.all
  end

  private

  def motivation_params
    params.require(:motivation).permit(:name, :firstname, :email, :phone, :team, :motivation, :studyyears, :opleiding,
                                       :school)
  end
end
