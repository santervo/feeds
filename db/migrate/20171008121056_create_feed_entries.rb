class CreateFeedEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :feed_entries do |t|
      t.references :feed, foreign_key: true
      t.string :title
      t.text :summary
      t.string :link
      t.datetime :date

      t.timestamps
    end
  end
end
