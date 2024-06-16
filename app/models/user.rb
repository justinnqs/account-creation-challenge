class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  validate :validate_username
  validate :validate_password

  def validate_username
    username_length = username.length
    if username_length < 10
      errors.add(:username, "Username must be longer than 10 characters.")
    end
    if username_length > 50
      errors.add(:username, "Username must be shorter than 50 characters.")
    end
  end

  def validate_password
    has_letter = password.match(/[A-Za-z]/)
    has_number = password.match(/[0-9]/)
    result = Zxcvbn.test(password)
    if(!has_letter)
      errors.add(:password, "Password needs at least 1 letter.")
    end
    if(!has_number)
      errors.add(:password, "Password needs at least 1 number.")
    end
    if(result.score < 2)
      errors.add(:password, "Password is not strong enough.")
    end
  end
end
