function stringGenerator(){
    const string  = (Math.random()+1).toString(36).substring(3);
    return string
}
function markGenerator(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}
class Students{

    constructor(){
        this.id_array = [];
        this.name_array = [];
        this.mark_array = [];
    }
    addStudent(id,name,mark){
       this.id_array.push(id)
       this.name_array.push(name)
       this.mark_array.push(mark)
    }
    printIdArray(){
        this.id_array.forEach(element=>{
            console.log(element)
        })
    }
    printNameArray(){
        this.name_array.forEach(element=>{
            console.log(element)
        })
    }
    printMarkArray(){
        this.mark_array.forEach(element=>{
            console.log(element)
        })
    }
    sumOfMarks(){
        let sumOfMarks = this.mark_array.reduce((sum,mark)=>{
            return sum+=mark;
        })
        return sumOfMarks;
    }
    highestMarkFinder(){
        let highestMark=0;
        let highestName = '';
        for (let i=0;i<=this.id_array.length;i++){
            if(this.mark_array[i]>highestMark){
                highestMark = this.mark_array[i];
                highestName = this.name_array[i];
            }
        }
        let result = [
            {mark : highestMark,name : highestName},
        ];
        return result; 
    }
}


var students = new Students();
for (let i=1;i<11;i++){
    let string = stringGenerator();
    let mark = markGenerator(1,20);
    students.addStudent(i,string,mark);
}
console.log(students.highestMarkFinder());


