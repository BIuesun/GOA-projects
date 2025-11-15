// 1.შექმენი პროგრამა, რომელიც იღებს ობიექტების მასივს მომხმარებლებთან ერთად (სახელი და ასაკი) და აბრუნებს Map-ს, სადაც key არის მომხმარებლის სახელი და value — მათი ასაკი.

function usersToMap(users) {
    return new Map(users.map(user => [user.name, user.age]));
}

// 2.მოცემულია რიცხვების მასივი, რომელშიც შეიძლება დუბლიკატები — გამოიყენე Set, რათა დააბრუნო მხოლოდ უნიკალური რიცხვების მასივი.

function duplicates(arr){
    let noDupes = new Set()
}

let fa = duplicates([12,3,4,5,12,3,4,12]);
console.log(fa)