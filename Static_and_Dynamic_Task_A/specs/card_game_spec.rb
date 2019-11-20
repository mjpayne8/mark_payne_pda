require('minitest/autorun')
require('minitest/rg')
require_relative('../card')
require_relative('../card_game')

class CardGameTest < Minitest::Test

  def setup
    @card1 = Card.new('spades',1)
    @card2 = Card.new('hearts',5)
  end

  def test_checkforAce__card1_returns_true
    assert_equal(true,CardGame.checkforAce(@card1))
  end

  def test_checkforAce__card2_returns_false
    assert_equal(false,CardGame.checkforAce(@card2))
  end

  def test_highest_card__returns_card2
    assert_equal(@card2,CardGame.highest_card(@card1,@card2))
  end

  def test_cards_total__card1_card2_returns_6
    assert_equal("You have a total of 6",CardGame.cards_total([@card1,@card2]))
  end

end
