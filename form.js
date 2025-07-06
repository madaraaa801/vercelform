import { supabase } from "./supabase.js";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const isim = form.isim.value;
  const abone = form.abone.value;
  const link = form.link.value;
  const kod = form.kod.value;

  const { error } = await supabase.from("gonderilenler").insert([
    { isim, abone, link, kod },
  ]);

  const sonuc = document.getElementById("sonuc");
  if (error) {
    sonuc.textContent = "Hata: " + error.message;
  } else {
    sonuc.textContent = "Gönderildi! ✅";
    form.reset();
  }
});
