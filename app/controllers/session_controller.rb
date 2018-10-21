class SessionController < ApplicationController
  
  def new
    puts 'NEWWWWWWWWWWWWWWWWWWW'
  end
  
  def create
    puts 'CREEEEEEEEEEEEEEEEEEEEEEEEEAte'
        parent = Parent.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
      parent = authenticate_with_credentials(params[:email], params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      if parent != nil
      session[:user_id] = parent.id
 
      redirect_to "/parents/#{parent.id}"

    else
    # If user's login doesn't work, send them back to the login form.
      redirect_to '/login'
    end
  end

  def destroy
  end

  def authenticate_with_credentials(email, password)
    parent = nil
    nemail = email.to_s.rstrip.lstrip.downcase
    
    parent = Parent.find_by(email: nemail, password: password)
    
    parent ? parent : nil
    puts "NAMEEEEEEEEEEEEEEEEEEEEEE #{parent.name}" 
    parent
  end


end
