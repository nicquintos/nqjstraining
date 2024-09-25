class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }
  get level(){
    let output = "";
    if (this.credits > 90) output += "Senior";
    if (this.credits <= 90 && this.credits >= 61 ) output += "Junior";
    if (this.credits <= 60 && this.credits >= 31 ) output += "Sophomore";
    if (this.credits <= 30) output += "Freshman";

    return output;
  }
}

const student = new Student(3.9);