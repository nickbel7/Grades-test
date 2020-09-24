// Subject class: Represents a subject (Name, Grade)
class Subject {
	constructor(name, grade) {
		this.name = name;
		this.grade = grade;
	}
}

// Term class: Represents a list of subjects
class Term {
	constructor(){
		this.id = Student.getNextId();
		this.subjects = [];
	}
	/*
	static getSubjects() {
		let terms = Student.getTerms();
		let currentTerm;
		if (terms == null)
			return;
		else {
			terms.forEach((term, index) => {
				if (term.id === id) {
					currentTerm = terms[index];
				}
			});
		}	
		
		return currentTerm.subjects;
	}
	*/
	/* mallon axreiasto*/
	static getSubjects() {
		return this.subjects;
	}
	
	static addSubject(subject) {
		this.subjects.push[subject];
	}
	
	static removeSubject(index) {
		this.subjects.splice(index, 1);
	}
}

// Student class: Represents a list of terms
class Student {
	static getTerms() {
		let terms;
		if (localStorage.getItem('terms') === null){
			terms = [];
		} else {
			terms = JSON.parse(localStorage.getItem('terms'));
		}
		
		return terms;
	}
	
	static addTerm(term) {
		const terms = Student.getTerms();
		terms.push(term);
		localStorage.setItem('terms', JSON.stringify(terms));
	}
	
	static removeTerm(id) {
		const terms = Student.getTerms();
		/*
		terms.forEach((term, index) => {
			if (term.id === id) {
				terms.splice(index, 1);
			}
		});
		*/
		terms.pop();
		
		localStorage.setItem('terms', JSON.stringify(terms));
	}
	
	static getNextId() {
		return Student.getTerms().length;
	}
	
}

class UI {
	static displayTerms() {
		const terms = Student.getTerms();
		
		terms.forEach((term) => UI.addTermToList(term));
	}
	
	static addTermToStudent(term) {
		const list = document.querySelector('#terms-list');
		
		const object = document.createElement('tr');
		
	}
}
const data = localStorage.getItem('name-2');
document.querySelector("#test-field").innerHTML = data;

//load some data in local storage
localStorage.setItem('name','Nick');

// Makes a field Editable
var btnEdit = document.querySelector("#edit-btn");
btnEdit.addEventListener('click', editAll);
function editAll() {
	var field = document.querySelector("#test-field");
	field.setAttribute('contenteditable', true);
	console.log('hello');
}

// Undos the ability to edit a field
var btnSave = document.querySelector("#save-btn");
btnSave.addEventListener('click', saveAll);
function saveAll() {
	var field = document.querySelector("#test-field");
	field.setAttribute('contenteditable', false);
	
	localStorage.setItem('name-2', field.innerHTML);
	
	console.log('hello back');
	console.log(field.innerHTML);
}
