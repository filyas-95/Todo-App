var info = 0;

var get = "";

var task = [];

function addval() {
	info = document.getElementById("name").value;

	if (info == "") {
		document.getElementById("field").innerHTML = "Please fill in the field";
	} else {
		task.push(info);

		fetch();
		document.getElementById("field").innerHTML ="";
	}
}

function Edit_btn(val) {
	let show_val = document.getElementById("input_check");

	show_val.value = task[val];
	document.getElementById("edit_field").style.display = "block";
	document.getElementById("form_submit").onsubmit = function () {
		let edited_field = show_val.value;
		if (edited_field) {
			task.splice(val, 1, edited_field.trim());
			fetch();
			document.getElementById("edit_field").style.display = "none";
		}
	};
}
function fetch() {
	let fet_data = "";

	if (task.length > 0) {
		for (let i = 0; i < task.length; i++) {
			fet_data += "<tr>";
			fet_data += "<td id=got>" + task[i] + "</td>";
            fet_data +=
            
            "<td ><input type=button  value=Completed name=checkk id=check class=form-control onclick=Completed("+i+")> </td>"
            +
				"<td> <input type=submit  value= Edit onclick=Edit_btn(" +
				i +
				")  class=form-control id=ed>  </input> ";
			fet_data +=
				"<input type=submit  value= Delete   class=form-control id=del onclick=delete_btn(" +
				i +
				") > </input> </td>";
				// alert(task);
			localStorage.setItem("TASK", task);
			
			fet_data += "</tr>";
		}
	}
    document.getElementById("name").value="";

	return (document.getElementById("work").innerHTML = fet_data);
}
// function Completed(val){

// 	document.getElementById("btn_check").style.display = "block";
// 	let al = document.getElementById("got");
   
// 	al.value = task[val];
	
// 	let get=al.value;

// alert(get);
// 	// get.style.color="red";
// // var res=get.strike();;
// // document.getElementById("got").innerHTML=get;


// // alert(li);

// // localStorage.setItem("completed",task);
// // task.push(li);
	


// }


function Completed(val){

	// let show_val = new Object();
	 show_val = document.getElementById("got").innerHTML;
	show_val=task[val];	
	// alert(show_val);
	let arr=[];

	
	arr.push(show_val);
	alert(arr);

	document.getElementById("comp").innerHTML=arr;

// let ch = show_val.splice(val, 1);

	
// alert(ch);

// document.getElementById("comp").innerHTML+=show_val;

// console.log(show_val);

localStorage.setItem("Completed",arr);
alert(arr);
	
// fetch();
	

}

// function comp(show_val) {
// 	// parse stored JSON if it exists otherwise an empty object 
// 	// var values = JSON.parse(localStorage.getItem('Completed') || '{}');
  
// 	var inputs = document.getElementById('got').innerHTML;
  
  
// 	for (let i = 0; i < inputs.length; i++) {
// 		show_val = inputs[i];
// 		show_val.value = show_val[i] || '';// stored value if it exists or empty string
  
// 		show_val.onchange = function() {
// 		// assign value to the object above
// 		show_val[i] = this.value;
// 		// store updated version of object
// 		localStorage.setItem('Completed', JSON.stringify(show_val));
// 		alert(show_val);
// 	  }
// 	}

  
//   }

// function Compte(val){

// 	var newStudent = new Object();

// 	// this is how you set it
// 	newStudent.check = document.getElementById('got').innerHTML;

// for(let h=0; h<task.length; h++){
//   newStudent=task[val];
//   alert(newStudent);
//   if(sessionStorage.student)
//   {
//    student= JSON.parse(sessionStorage.getItem('student'));
//   }else{
//    student=[];
//   }
//   student.push(newStudent )
//   sessionStorage.setItem('student', JSON.stringify(student));

// 	 // this is how you will retrive it

//   var retrievedObject = sessionStorage.getItem('student');
//   console.log('retrievedObject: ', JSON.parse(retrievedObject));
// }
// }





function delete_btn(val) {
	var del = task.splice(val, 1);

	if (task == 0) {
		window.localStorage.clear();
	}
	localStorage.removeItem(del);

	fetch();
}

function load_screen() {


	var allitems = localStorage.getItem("TASK");
	// var allitems1 = localStorage.getItem("Completed");

	allitems = allitems.split(",");
	// allitems1 = allitems1.split(",");

	task = allitems;
	// task = allitems1;

	fetch();
}


function load_comp(){

	let allitems1 = localStorage.getItem("Completed");
	// var allitems1 = localStorage.getItem("Completed");

	// allitems1 = allitems1.split(",");
	// allitems1 = allitems1.split(",");

	let show_val = allitems1;
	alert(show_val);
	// task = allitems1;

	fetch();

}
window.onload = load_comp;

window.onload = load_screen;
