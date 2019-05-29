const greeting = (name = "user") => {
  console.log("Hello" + name)
}

greeting("Andy")  //Hello Andy
greeting()        //Hello user