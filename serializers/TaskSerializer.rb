class TaskSerializer < ActiveModel::Serializer
  attributes :image, :id

  def image
    object.image.url
  end

  def id
    object.id.to_s
  end


end
