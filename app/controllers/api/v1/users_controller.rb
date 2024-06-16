module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :verify_authenticity_token
      def create
        @user = User.new(create_user_params)
        if @user.save
          render json: {status: 'SUCCESS'}, status: :ok
        else 
          render json: {status: 'ERROR', data: @user.errors}, status: :unprocessable_entity
        end
      end

      private
      def create_user_params
        params.require(:user).permit(:username, :password)
      end
    end
  end
end