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

puts "Creating Teachers ..."

teacher1 = Teacher.create(
  name:'Charles', 
  email:'charles@gmail.com', 
  password:'123', 
  hourly_wage: 25, 
  img_url:'https://images.plurk.com/mx_3tOQeBIWwlkBRvnZVKFJ5l.jpg'
)

teacher2 = Teacher.create(
  name:'Yang', 
  email:'yang@gmail.com', 
  password:'123', 
  hourly_wage: 25, 
  img_url:'https://images.plurk.com/mx_75VKOCwjZPitCPwrPdrA6o.jpg'
)

teacher3 = Teacher.create(
  name:'Frank', 
  email:'frank@gmail.com', 
  password:'123', 
  hourly_wage: 20, 
  img_url:'https://images.plurk.com/mx_3Dzh3FiUrc6vsCqtdUksSB.jpg'
)

teacher4 = Teacher.create(
  name:'Kanwal', 
  email:'kanwal@gmail.com', 
  password:'123', 
  hourly_wage: 45, 
  img_url:'https://images.plurk.com/mx_2c9oCWaa4tU6hPo4SZ9eq7.jpg'
)


puts "Creating Parents ..."

parent1 = Parent.create(
  name:'David Williams',
  email:'david@gmail.com',
  password:'123'
)

parent2 = Parent.create(
  name:'John Smith',
  email:'john@gmail.com',
  password: '123'
)


parent3 = Parent.create(
  name:'Jenny Chang',
  email:'jenny@gmail.com',
  password: '123'
)

puts "Creating Students ..."

student1 = parent1.students.create!({
  name:'Joe Williams',
  age: 12
})

student2 = parent2.students.create!({
  name:'Jensen Smith',
  age: 13
})

student3 = parent3.students.create!({
  name:'Carl Chang',
  age: 13
})

student4 = parent1.students.create!({
  name:'Jack Williams',
  age: 13
})


puts "Creating Subjects ..."

subject1 = Subject.create(name:'Math', cost: 8200)
subject2 = Subject.create(name:'Chemistry', cost: 8900)
subject3 = Subject.create(name:'Physics', cost: 8750)
subject4 = Subject.create(name:'Biology', cost: 8800)



puts "Creating Programs ..."

program1 = Program.create(
  subject_id:subject1.id, 
  teacher_id:teacher1.id, 
  start_date:20181101, 
  end_date:20190118
)

program2 = Program.create(
  subject_id:subject2.id, 
  teacher_id:teacher1.id, 
  start_date:20181020, 
  end_date:20181210
)


program3 = Program.create(
  subject_id:subject3.id, 
  teacher_id:teacher1.id, 
  start_date:20181010, 
  end_date:20181130
)


program4 = Program.create(
  subject_id:subject3.id, 
  teacher_id:teacher2.id, 
  start_date:20181010, 
  end_date:20181220
)



program5 = Program.create(
  subject_id:subject3.id, 
  teacher_id:teacher2.id, 
  start_date:20181101, 
  end_date:20190105
)

program6 = Program.create(
  subject_id:subject3.id, 
  teacher_id:teacher3.id, 
  start_date:20181026, 
  end_date:20181125
)



program7 = Program.create(
  subject_id:subject3.id, 
  teacher_id:teacher3.id, 
  start_date:20181016, 
  end_date:20181203
)

program8 = Program.create(
  subject_id:subject1.id, 
  teacher_id:teacher4.id, 
  start_date:20181010, 
  end_date:20181130
)

Review.create(
  teacher_id: teacher1.id,
  content: "My son's grade improves significantly!",
  rating: 5,
  parent_id: parent1.id,
  subject_id: subject1.id
)

Review.create(
  teacher_id: teacher1.id,
  content: "I hope the lesson plan is more well designed.",
  rating: 3,
  parent_id: parent3.id,
  subject_id: subject2.id
)

Review.create(
  teacher_id: teacher2.id,
  content: "I want more homework for my children.",
  rating: 4,
  parent_id: parent2.id,
  subject_id: subject1.id
)

Review.create(
  teacher_id: teacher3.id,
  content: "I hope the program is longer.",
  rating: 3,
  parent_id: parent2.id,
  subject_id: subject1.id
)

Review.create(
  teacher_id: teacher4.id,
  content: "I hope you can offer more subjects.",
  rating: 4,
  parent_id: parent2.id,
  subject_id: subject1.id
)


assignment1 = Assignment.create(
  name:'Algebra practice',
  content:'Math Priciple p.125: #1 - #20',
  start_date: 20181101,
  end_date: 20181107,
  program_id: program1.id 
)

assignment2 = Assignment.create(
  name:'Redox practice',
  content: 'Intor Chemisry p.213: #30 - #35',
  start_date: 20181025,
  end_date: 20181101,
  program_id: program2.id
)

assignment3 = Assignment.create(
  name:'Electron practice',
  content: 'Intor Chemisry p.202: #30 - #35',
  start_date: 20181020,
  end_date: 20181130,
  program_id: program2.id
)

assignment4 = Assignment.create(
  name:'Atom practice',
  content: 'Intor Chemisry p.207: #39 - #45',
  start_date: 20181121,
  end_date: 20181230,
  program_id: program2.id
)

assignment5 = Assignment.create(
  name:'Proton-electron practice',
  content: 'Intor Chemisry p.207: #46 - #61',
  start_date: 20191121,
  end_date: 20191230,
  program_id: program2.id
)

assignment6 = Assignment.create(
  name:'Chemical change practice',
  content: 'Intor Chemisry p.207: #70 - #88',
  start_date: 20191021,
  end_date: 20191130,
  program_id: program2.id
)

AssignmentPerformance.create(
  assignment_id: assignment4.id,
  student_id: student4.id,
  status: 'Marked',
  score: 40,
  feedback: 'Need more improvement'
)


AssignmentPerformance.create(
  assignment_id: assignment5.id,
  student_id: student4.id,
  status: 'Marked',
  score: 60,
  feedback: 'Please be prepared next time'
)


AssignmentPerformance.create(
  assignment_id: assignment4.id,
  student_id: student1.id,
  status: 'Marked',
  score: 90,
  feedback: 'Excellent '
)
AssignmentPerformance.create(
  assignment_id: assignment5.id,
  student_id: student1.id,
  status: 'Marked',
  score: 50,
  feedback: 'You shall not pass'
)

AssignmentPerformance.create(
  assignment_id: assignment6.id,
  student_id: student1.id,
  status: 'Marked',
  score: 70,
  feedback: 'GOOD!'
)
AssignmentPerformance.create(
  assignment_id: assignment1.id,
  student_id: student1.id,
  status: 'Marked',
  score: 50,
  feedback: 'Study harder'
)
AssignmentPerformance.create(
  assignment_id: assignment2.id,
  student_id: student1.id,
  status: 'Marked',
  score: 30,
  feedback: 'You should study'
)
AssignmentPerformance.create(
  assignment_id: assignment2.id,
  student_id: student2.id,
  status: 'Marked',
  score: 100,
  feedback: 'Good job!'
)

AssignmentPerformance.create(
  assignment_id: assignment3.id,
  student_id: student1.id,
  status: 'Marked',
  score: 30,
  feedback: 'Please seek for help'
)

Admission.create(
  program_id: program1.id,
  student_id: student1.id
)

Admission.create(
  program_id: program1.id,
  student_id: student2.id
)

Admission.create(
  program_id: program2.id,
  student_id: student4.id
)


Admission.create(
  program_id: program5.id,
  student_id: student1.id
)

Admission.create(
  program_id: program6.id,
  student_id: student2.id
)

Admission.create(
  program_id: program7.id,
  student_id: student4.id
)

Admission.create(
  program_id: program8.id,
  student_id: student4.id
)

Admission.create(
  program_id: program8.id,
  student_id: student1.id
)