class Signup < ApplicationRecord
  belongs_to :camper
  belongs_to :activity

  def self.update_registrations(camper_id, updates)
    camper = Camper.find(camper_id)

    updates.each do |time, updated_activity_id|
      old_activity = camper.activities.find_by(dates: time)
      new_activity = Activity.find(updated_activity_id) unless updated_activity_id == "none"

      if old_activity
        signup = camper.signups.find_by(activity_id: old_activity.id)
        if updated_activity_id == "none"
          Signup.find(signup.id).delete
        elsif updated_activity_id == old_activity.id
        else
          signup.update(activity_id: updated_activity_id)
        end
      else
        camper.signups.create(activity_id: updated_activity_id)
      end
    end
    camper.activities
  end
end
