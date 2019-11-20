### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

#missing require_relative('card')
class CardGame


  def checkforAce(card) #should be snake case, should be self method as no intialize
    if card.value = 1 #wrong syntax for logical, should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #spelling error should be def, also missing , between variables. Should be self method as no initialise
  if card1.value > card2.value #indentation off in rest of function
    return card #this should be card1
  else
    return card2
  end
end
end #extra end not needed

def self.cards_total(cards)
  total #total not set to 0
  for card in cards
    total += card.value
    return "You have a total of" + total #no space at end of string - formatting will be incorrect. Also this line should be outside the for loop and should have total.to_s.
  end
end

#missing end here
```
