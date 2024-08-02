#create a function which takes string lists and outputs longest word in it.

def longest_word(word_list):
    longest = word_list[0]
    for word in word_list:
        if len(word) > len(longest):
            longest = word
    return longest

word_list = ["wow", "mice", "apple", "hydroelectric"]
print(longest_word(word_list))
