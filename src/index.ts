

export class MainClass {

  private speech: string = "Hello World in TypeScript"; 

  public speak(){
    console.log(this.speech);
  }

}

let main = new MainClass()
main.speak();
