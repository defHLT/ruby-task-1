require './uploaders/AvatarUploader.rb'

class Task
  include Mongoid::Document

  field :image, type: String
  mount_uploader :image, TaskUploader

end
