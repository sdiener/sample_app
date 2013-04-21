FactoryGirl.define do
	factory :user do
		name   "Michael Richter"
		email  "michael.richter@example.com"
		password "foobar"
		password_confirmation "foobar"
	end
end
