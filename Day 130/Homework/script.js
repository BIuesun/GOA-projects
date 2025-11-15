// 1) კომენტარების სახით ახსენი, რას აკეთბს და რისთვის გამოიყენება try და catch
// try da catch ვიყენებთ error-ის საპოვნად, try-ში თუ კოდი უშეცდომოდ გაეშვა ის გამოტოვებს catch თუარადა catch იმუშავებს.


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// 2) https://jsonplaceholder.typicode.com/posts/1
// წამოიღეთ მონაცემები საიტზე, კარგად გასტილეთ და დაამატეთ კოდში try და catch

async function post(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

post()