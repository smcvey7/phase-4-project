class Signup < ApplicationRecord
  belongs_to :camper
  belongs_to :activity

  def self.update_registrations(camper_id, updates)
    camper = Camper.find(camper_id)

    updates.each do |time, updated_activity_id|
      old_activity = camper.activities.find_by(dates: time)
      new_activity = Activity.find(updated_activity_id) unless updated_activity_id == "none"
      # check if an activity already exists for a specific date
      if old_activity
        signup = camper.signups.find_by(activity_id: old_activity.id)
        # if changing activity to "none"
        if updated_activity_id == "none"
          Signup.find(signup.id).delete
        # if changing one activity to another
        else
          signup.update(activity_id: updated_activity_id) unless updated_activity_id == old_activity.id
        end
      # if no old activity, create new
      else
        camper.signups.create(activity_id: updated_activity_id) unless updated_activity_id == "none"
      end
    end
    camper.activities
  end
end
