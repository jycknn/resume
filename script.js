
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("commentName").value;
  const text = document.getElementById("commentText").value;

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment");
  commentBox.innerHTML = `<strong>${name}:</strong> <p>${text}</p>`;

  document.getElementById("commentSection").appendChild(commentBox);
  this.reset();
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  alert("Resume download not yet set. Link a real PDF file to enable this.");
});
