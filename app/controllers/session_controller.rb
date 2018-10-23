class SessionController < ApplicationController
  
  def new
    puts 'In LOGIN'
  end
  
  def create
    puts 'CREATE NEW SESSION'
    # parent = Parent.find_by_email(params[:email])
    # teacher = Teacher.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
      user = authenticate_with_credentials(params[:email], params[:password])

      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
    # byebug
    if user.has_attribute?(:hourly_wage) == false
      session[:user_id] = user.id
      session[:user_type] = "parent"

      redirect_to "/parents/#{session[:user_id]}"
    
    elsif user != nil
      session[:user_id] = user.id
      session[:user_type] = "teacher"
      redirect_to "/teachers/#{session[:user_id]}"
    else
    # If user's login doesn't work, send them back to the login form.
      redirect_to '/login'
    end
  end
  
  def show
    render json: session[:user_id]
  end


  def destroy
  end

  def authenticate_with_credentials(email, password)
    
    nemail = email.to_s.rstrip.lstrip.downcase
    

    parent = Parent.find_by(email: nemail, password: password)
    teacher = Teacher.find_by(email: nemail, password: password)
    
    if parent != nil
      parent
    elsif teacher != nil
      teacher
    else
      nil
    end
    
  end


end
