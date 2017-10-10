class CreateFeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :feeds do |t|
      t.string :url
      t.string :title
      t.string :link
      t.text :summary
      t.string :external_id
      t.datetime :fetched_at

      t.timestamps
    end
  end
end
