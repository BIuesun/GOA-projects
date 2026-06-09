console.log("=== 1) Buffer-ის ბაიტები ===");
const buf1 = Buffer.from("Hello World");
console.log("Buffer:", buf1);
console.log("ბაიტები:", [...buf1]);

console.log("\n=== 2) Buffer → toString() ===");
const buf2 = Buffer.from("გამარჯობა Node.js!");
const backToString = buf2.toString();
console.log("Buffer:", buf2);
console.log("სტრინგი:", backToString);

console.log("\n=== 3) Buffer.alloc + სახელი ===");
const emptyBuf = Buffer.alloc(10);
const name = "Giorgi";
emptyBuf.write(name);
console.log("ცარიელი buf (write-მდე):", Buffer.alloc(10));
console.log("სახელის შემდეგ:", emptyBuf);
console.log("წაკითხვა:", emptyBuf.toString().replace(/\0/g, ""));


console.log("\n=== 4) Buffer.concat ===");
const partA = Buffer.from("Hello, ");
const partB = Buffer.from("World!");
const combined = Buffer.concat([partA, partB]);
console.log("partA:", partA.toString());
console.log("partB:", partB.toString());
console.log("გაერთიანებული:", combined.toString());


console.log("\n=== 5) buffer.equals() ===");
const x = Buffer.from("abc");
const y = Buffer.from("abc");
const z = Buffer.from("xyz");
console.log(`"abc".equals("abc") →`, x.equals(y)); 
console.log(`"abc".equals("xyz") →`, x.equals(z)); 


console.log("\n=== 6) process.pid ===");
console.log("პროცესის ID:", process.pid);


console.log("\n=== 7) process.cwd() ===");
console.log("მიმდინარე დირექტორია:", process.cwd());


console.log("\n=== 8) process.argv ===");
console.log("ყველა არგუმენტი:");
process.argv.forEach((arg, index) => {
  console.log(`  [${index}] → ${arg}`);
});

-
console.log("\n=== 9) process.exit() შემოწმება ===");
const userArgs = process.argv.slice(2); 

if (userArgs.length === 0) {
  console.log("No argument");
  process.exit(0);
} else {
  console.log("გადაცემული არგუმენტები:", userArgs.join(", "));
}