1.times do
  user = User.create(email: "api_user@domain.com", password: "123456", password_confirmation: "123456")
  puts "User #{user.email} created"
end

5.times do 
  appointment = Appointment.create(title: FFaker::Lorem.phrase, body: FFaker::Address.street_address, user: User.first)
  puts "Appointment #{appointment.title} created"
end