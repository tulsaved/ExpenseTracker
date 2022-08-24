"use strict";
const bvalue = document.getElementById("Bvalue");
const evalue = document.getElementById("evalue");
const tag = document.querySelector("#tag");
const trans = document.querySelector(".trans");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const btn = document.querySelectorAll(".btn");
const amt = document.querySelectorAll(".amt");
const exp = document.querySelectorAll(".exp");
let x = [];
let amount = 0;
let expanse = 0;
for (let i = 0; i < btn.length; i++) {
  amt[i].addEventListener("click", function () {
    x[i] = parseInt(prompt("Add the salary"));
    amount += x[i];
    let salary = x[i];
    tag.style.display = "none";
    left.append("Salary");
    right.append("₹ " + salary);
  });
  exp[i].addEventListener("click", function () {
    x[i] = parseInt(prompt("Add the expense"));
    expanse += x[i];
    let number = x[i];
    evalue.textContent = "₹ " + expanse;
    tag.style.display = "none";
    left.append("Expense");
    right.append("₹ " + number);
  });

  btn[i].addEventListener("click", function () {
    let balance = amount - expanse;
    bvalue.textContent = "₹ " + balance;
    trans.style.display = "block";
    left.appendChild(document.createElement("br"));
    right.appendChild(document.createElement("br"));
  });
}
