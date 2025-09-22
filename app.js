console.log("تم ربط JavaScript بنجاح ✅");

const title = document.querySelector("h1");
title.addEventListener("click", () => {
  if (title.style.color === "red") {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

const btn = document.createElement("button");
btn.textContent = "أضف فقرة جديدة";
document.body.insertBefore(btn, document.querySelector("p"));

btn.addEventListener("click", () => {
  const pp = document.createElement("p");
  pp.textContent = "تمت إضافة فقرة جديدة بواسطة JavaScript ✅";
  pp.style.cursor="pointer";
  document.body.insertBefore(pp, document.querySelector("p"));

  // ربط الحدث للفقرة الجديدة فقط
  pp.addEventListener("click", () => {
    if (pp.style.background !== "blue") {
      pp.style.background = "blue";
    } else {
      pp.style.background = "red";
    }
  });
});
