// 1. შექმენით ფუნქცია: "გადავიდეთ თუ არა ტესტში"
function shouldProceedToTest(scores, authors) {
    for (let score of scores) {
        if (score >= 50) {
            return true;
        }
    }
    for (let author of authors) {
        if (author.toLowerCase() === "admin") {
            return true;
        }
    }

    return false;
}

// 2.შექმენით ფუნქცია: "შეგვიძლია თუ არა გასვლა გარეთ"

function canGoOutside(weatherIsGood, timeIsEnough, isReady) {
    return (weatherIsGood || timeIsEnough) && isReady;
}

// 3.შექმენით ფუნქცია: "გადავდგათ თუ არა ნაბიჯი"

function shouldTakeStep(noBarrier, spaceAvilable, signalReceived) {
    
    return (noBarrier && spaceAvilable) || signalReceived;
}

// 4.შექმენით ფუნქცია: "უნდა ავიღოთ თუ არა ნივთი"
function takeItem(itemAvailable,canTakeItem,noOneWants){
    return (itemAvailable && canTakeItem) || noOneWants
}

// 5.შექმენით ფუნქცია: "უნდა გავიხსენოთ თუ არა ინფორმაცია"
function remember(isActive,isNeeded,haveTime){
    return (isActive && isNeeded) || haveTime;
}

// 6.შექმენით ფუნქცია: "უნდა დავიძინოთ თუ არა"
function sleep(isLate,isTired,lightsOn,needToWakeEarly){
    return (isLate && isTired) || (needToWakeEarly && lightsOn);
}

// 7.შექმენით ფუნქცია: "უნდა წავიდეთ თუ არა წვეულებაზე"
function party(friendsAgreed,nextDayNoWork,partyNear){
    return (friendsAgreed && nextDayNoWork) || partyNear;
}

// 8.შექმენით ფუნქცია: "უნდა დავრჩეთ თუ არა სახლში"
function stayHome(weatherRainy,weatherSnowy,havePlans){
    return (weatherRainy || weatherSnowy) && havePlans
}

// 9.შექმენით ფუნქცია: "უნდა გავიდეთ სირბილზე თუ არა"
function goJogging(weatherClean,sportKicksAvailabl,friendReady){
    return (weatherClean && sportKicksAvailabl) &&friendReady
}
//..........................................................................................



// 10.შექმენით ფუნქცია: "უნდა ვუყუროთ თუ არა ფეხბურთს"


// უნდა იყოს შაბათი ან კვირა
function isWeekend(day) {
    return day === 'Saturday' || day === 'Sunday';
  }
  
  // არ უნდა გვქონდეს სხვა საქმეები
  function hasNoTasks(tasks) {
    return tasks.length === 0;
  }
  
  // თამაში ჩვენი საყვარელი გუნდის მონაწილეობით
  function isFavoriteTeamPlaying(game, favoriteTeam) {
    return game.team1 === favoriteTeam || game.team2 === favoriteTeam;
  }
  
// საბოლოო ფუნქცია
function shouldWatchFootball(day, tasks, game, favoriteTeam) {
    if (isWeekend(day) && hasNoTasks(tasks) && isFavoriteTeamPlaying(game, favoriteTeam)) {
      return 'კარგი დროა ფეხბურთის საყურებლად!';
    } else {
      return 'ცუდი დროა ფეხბურთის საყურებლად!';
    }
  }
  