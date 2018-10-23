# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Teachers

Teacher.destroy_all

puts "Creating Teachers ..."

teacher1 = Teacher.create(
  name:'Charles', 
  email:'charles@gmail.com', 
  password:'123', 
  hourly_wage: 1, 
  img_url:'www.gg'
)

teacher2 = Teacher.create(
  name:'Yang', 
  email:'yang@gmail.com', 
  password:'456', 
  hourly_wage: 2, 
  img_url:'www.ggdd'
)


Parent.destroy_all
puts "Creating Parents ..."

parent1 = Parent.create(
  name:'Ping',
  email:'abc@gmail.com',
  password:'123'
)

parent2 = Parent.create(
  name:'Gee',
  email:'def@gmail.com',
  password: '123'
)

Student.destroy_all
puts "Creating Students ..."

student1 = parent1.students.create!({
  name:'Gong',
  age: 12
})

student2 = parent2.students.create!({
  name:'Keee',
  age: 13
})

Subject.destroy_all
puts "Creating Subjects ..."

subject1 = Subject.create(name:'Computer', cost: 200)

puts "Creating Programs ..."

program1 = Program.create(
  subject_id:subject1.id, 
  teacher_id:teacher1.id, 
  start_date:20181101, 
  end_date:20190118
  )


Review.create(
  teacher_id: teacher1.id,
  content: 'GG',
  rating: 5,
  parent_id: parent1.id,
  subject_id: subject1.id
)

assignment1 = Assignment.create(
  name:'Kick Ass',
  content:'Kiss my Ass',
  start_date: 20180223,
  end_date: 20180228,
  program_id: program1.id 
)

assignment2 = Assignment.create(
  name:'Damn Good',
  content: 'Soooooo Gooood',
  start_date: 20180305,
  end_date: 20180403,
  program_id: program1.id
)

AssignmentPerformance.create(
  assignment_id: assignment1.id,
  student_id: student1.id,
  status: 'Marked',
  score: 0,
  feedback: 'Go study'
)
AssignmentPerformance.create(
  assignment_id: assignment2.id,
  student_id: student1.id,
  status: 'Marked',
  score: 30,
  feedback: 'Do good next time'
)
AssignmentPerformance.create(
  assignment_id: assignment2.id,
  student_id: student2.id,
  status: 'Marked',
  score: 100,
  feedback: 'GOOOOOOOD'
)

Admission.create(
  program_id: program1.id,
  student_id: student1.id
)

Admission.create(
  program_id: program1.id,
  student_id: student2.id
)