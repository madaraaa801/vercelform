import { supabase } from "./supabase.js";

const sifre = prompt("Şifreyi girin:");
if (sifre !== "1234") {
  alert("Şifre yanlış!");
  window.location.href = "index.html";
}

const { data, error } = await supabase
  .from("gonderilenler")
  .select("*")
  .order("id", { ascending: false });

const panel = document.getElementById("panel");

if (error) {
  panel.textContent = "Veri çekme hatası: " + error.message;
} else {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <hr>
      <strong>İsim:</strong> ${item.isim}<br>
      <strong>Abone:</strong> ${item.abone}<br>
      <strong>Link:</strong> ${item.link}<br>
      <strong>Kod:</strong><br>
      <pre>${item.kod}</pre>
    `;
    panel.appendChild(div);
  });
}
