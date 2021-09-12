class SampleNameChangeColumnType < ActiveRecord::Migration[6.1]
  def change
    change_column(:Products, :price, :decimal)
  end
end
