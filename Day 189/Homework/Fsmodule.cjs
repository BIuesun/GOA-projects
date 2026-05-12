const fs = require("fs");

// 1) შექმენი test.txt და ჩაწერე ტექსტი
fs.writeFile("test.txt", "Hello FS Module", (err) => {
  if (err) throw err;
  console.log("test.txt შეიქმნა");

  // 2) წაიკითხე test.txt
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("ფაილის შიგთავსი:", data);

    // 3) დაამატე ახალი ტექსტი
    fs.appendFile("test.txt", " - დამატებული ტექსტი", (err) => {
      if (err) throw err;
      console.log("ტექსტი დაემატა");

      // 4) შექმენი info.txt JSON ფორმატში
      const info = {
        name: "Luka",
        age: 20
      };

      fs.writeFile("info.txt", JSON.stringify(info), (err) => {
        if (err) throw err;
        console.log("info.txt შეიქმნა");

        // 5) წაიკითხე info.txt და გამოიტანე მხოლოდ სახელი
        fs.readFile("info.txt", "utf8", (err, data) => {
          if (err) throw err;

          const user = JSON.parse(data);
          console.log("სახელი:", user.name);

          // 6) გადაარქვი test.txt -> newTest.txt
          fs.rename("test.txt", "newTest.txt", (err) => {
            if (err) throw err;
            console.log("ფაილს სახელი შეეცვალა");

            // 7) წაშალე newTest.txt
            fs.unlink("newTest.txt", (err) => {
              if (err) throw err;
              console.log("newTest.txt წაიშალა");
            });
          });
        });
      });
    });
  });
});
