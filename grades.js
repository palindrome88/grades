const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = {};


//---Question 1--\\
//---qualify the grades--\\

for ( var entry in scores){

	if(scores[entry] >= 90 && scores[entry] <=100)
	{
		grades[entry] = "A"; 
	}
	else if(scores[entry] >= 80 && scores[entry] <=90)
	{
		grades[entry] = "B"; 
	}
	else if(scores[entry] >= 70 && scores[entry] <=80)
	{
		grades[entry] = "C"; 
	}
	else if(scores[entry] >= 60 && scores[entry] <=70)
	{
		grades[entry] = "D"; 
	}
	else{
		grades[entry] = "F";
	}
}
var minGrade = 100;

//---Question 2--\\
//----Find the minimum-----\\

scores.forEach(function(item, index){
    
	if(scores[index] < minGrade ) {
		minGrade = scores[index];
	}
});
let maxGrade = 0;

//---Question 3--\\
//----Find the minimum-----\\

scores.forEach( function(item, index){

	if(scores[index] > maxGrade) {
		maxGrade = scores[index];
	}

});


//---Question 4--\\
//----Find the minimum-----\\

var gradesTracker = [{ 
	grade: "A", numberofstudents: 0
},{
	grade: "B", numberofstudents: 0,
},{
	grade: "C", numberofstudents: 0,
},{
	grade: "D", numberofstudents: 0,
},{
	grade: "F", numberofstudents: 0
} 
];
	


var currentGradeCount;

for(currentGradeCount in grades){

	if(grades[currentGradeCount] == "A"){
		gradesTracker.grade("A").numberofstudents++;
	}
	else if(grades[currentGradeCount] == "B"){
		gradesTracker.grade("B").numberofstudents++;
	}
	else if(grades[currentGradeCount] == "C"){
		gradesTracker.grade("C").numberofstudents++;
	}
	else if(grades[currentGradeCount] == "D"){
		gradesTracker.grade("D").numberofstudents++;
	}
	else{
		gradesTracker.grade("F").numberofstudents++;
	}

}
//---Question 5--\\
//----Find the minimum-----\\
/*

Loop,
if(Temp > letter.value){
temp=letter.value;
Most freq = letter;
}

*/
var temp = 0;
var tempfreq;
var gradelist = ["A", "B", "C", "D"];
for(currentGradeCount in gradesTracker){

    if( temp > gradesTracker.grade(`${gradelist[currentGradeCount]}`)){
        temp = gradesTracker.grade(`${gradelist[currentGradeCount]}`);
        tempfreq = gradesTracker.grade(`${gradelist[currentGradeCount];.grade}`);
    }
    
    

}






/*
var  _count = 0;
var count = {A: _count = 0, B: _count = 0, C: _count= 0, D: _count = 0, F: _count = 2};

console.log("test", count.A._count);
/*
scores.forEach(whatyougot())

function whatyougot(){


     ((B>= this.scores) ? A._count++: A._count+0) || ((C<= this.scores && B>=this.scores) ? B._count++: B._count+0) || ((D<= this.scores && C>=this.scores) ? C._count++: C._count+0) || ((F<= this.scores && D>=this.scores) ? D._count++: D._count+0) || ((F<= this.scores) ? F._count++: F._count+0)


    // if 90 is less than this score, if true, increment A count. OR if 80 is less than this score, and 90 is greater than this score, increment B count OR if 70 is less than this score, and 80 is greater than this score, increment C count OR if 60 is less than this score, and 70 is greater than this score, increment D count
}

*/