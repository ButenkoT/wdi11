class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :breed
      t.string :origin
      t.string :image
      t.string :description

      t.timestamps null: false
    end
  end
end
