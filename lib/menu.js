exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `⚓✨ *${BotName}* ✨⚓
──────────────
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨
──────────────
📆TANGGAL *${tampilTanggal}*
⏱️WAKTU *${tampilWaktu}*
──────────────
 ⚓PUTOCRAFT⚓
MINECRAFT SERVER
🔑IP :
🔑PORT :
──────────────
❓COMMAND YANG DIKENALI❓

╭───「 *1.PEMBUAT STICKER* 」
├≽️ _${BotName} ✨ akan mengirimkan stickermu dengan caption !sticker_
├≽️Perintah: !sticker
├≽️Contoh: kirim gambar dengan caption !sticker
├
├
├───≽️「 *2.NULIS OTOMATIS* 」
├≽️_${BotName} ✨ akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
├≽️Perintah: !nulis [kata]
├≽️Contoh: !nulis Aris Gans
├
├
├───≽️「 *3.FITUR PANTUN* 」
├≽️ _${BotName} ✨ akan mengirimkan pantun secara random!_
├≽️Perintah: !pantun
├≽️Contoh: !pantun
├
├
├───≽️「 *4.DOWNLOADER YOUTUBE* 」
├≽️ _${BotName} ✨ akan mengirimkan video downloader dari yt sesuai perintah kamu!_
├≽️Perintah: !yt [link]
├≽️Contoh: !yt https://youtu.be/blablabla
├
├
├───≽️「 *5.FITUR QUOTES* 」
├≽️ _${BotName} ✨ akan mengirimkan katabijak secara random!_
├≽️Perintah: !quotes
├≽️Contoh: !quotes
├
├
├───≽️「 *6.PENYEGAR TIMELINE* 」
├≽️ _${BotName} ✨ akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
├≽️Perintah: !ptl [cewek/cowok]
├≽️Contoh: !ptl cewek
├
├
├───≽️「 *7.FITUR ANIME* 」
├≽️ _${BotName} ✨ akan mengirimkan gambar anime secara random!_
├≽️Perintah: !randomanime
├≽️Contoh: !!randomanime
├
├
├───≽️「 *8.PENGUBAH SUARA GOOGLE* 」
├≽️ _${BotName} ✨ akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
├≽️Perintah: !ttsid [kata]
├≽️Contoh: !ttsid Aris ganteng
├
├
├───≽️「 *9.FITUR QURAN* 」
├≽️ _${BotName} ✨ akan mengirimkan ayat-ayat quran secara random!_
├≽️Perintah: !quran
├≽️Contoh: !quran
├
├
├───≽️「 *10.INFORMASI BOT*
├≽️ _${BotName} ✨ akan mengirimkan informasi tentang bot!_
├≽️Perintah: !info
├≽️Contoh: !info
├
├
├───≽️「 *11.FITUR SAY* 」
├≽️ _${BotName} ✨ akan mengirimkan kata kata sesuai yang kamu kirim!_
├≽️Perintah: #say [kata]
├≽️Contoh: #say halo Aris ganteng
├
├
├───≽️「 *12.YOUTUBE MP3 DOWNLOADER* 」
├≽️ _${BotName} ✨ akan mengirimkan lagu sesuai perintah yang kamu kirim!_
├≽️Perintah: #ytmp3 [link]
├≽️Contoh: #ytmp3 https://youtu.be/xxxx
├
├
├───≽️「 *13.INSTAGRAM VIDEO/FOTO DOWNLOADER* 」
├≽️ _${BotName} ✨ akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
├≽️Perintah: !ig [link]
├≽️Contoh: !ig https://instagram.com/xxxx
├
├
├───≽️「 *14.FACEBOOK VIDEO/FOTO DOWNLOADER* 」
├≽️ _${BotName} ✨ akan mengirimkan video/foto fb sesuai perintah yang kamu kirim!_
├≽️Perintah: !fb [link]
├≽️Contoh: !fb https://facebook.com/xxxx
├
├
├───≽️「 *15.TWITTER VIDEO/FOTO DOWNLOADER* 」
├≽️ _${BotName} ✨ akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
├≽️Perintah: !twt [link]
├≽️Contoh: !twt https://twitter.com/xxxx
├
├
├───≽️「 *16.WIKIPEDIA* 」
├≽️ _${BotName} ✨ akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
├≽️Perintah: !wiki [query]
├≽️Contoh: !wiki anjing
├
├
├≽️💰 JANGAN  LUPA DONASI KE NOMOR +628985542651
├≽️⚓ PUTOCRAFT SERVER MINECRAFT!
├≽️💰 KAMU ORANG BAIK? DONASI YUK!
├
├───≽️「📺 *Iklan* 📺」
├
├
├≽️instagram : ${instagramlu}
├
├───≽️「INFORMASI COVID-19 TERBARU! 」
├
├≽️⚠️ POSITIF: *${corohelp.confirmed.value}*
├≽️⚠️ SEMBUH: *${corohelp.recovered.value}*
├≽️⚠️ MENINGGAL: *${corohelp.deaths.value}*
├≽️⚠️ UPDATE: *${corohelp.lastUpdate}*
├──️≽️ TETAP DI RUMAH! #IngatPesanIbu
├≽️♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
├──────────────
├≽️♻️ Mau pasang iklan di *${BotName} ?*
├≽️☎️ WA : *${whatsapplu}*
├──────────────
├≽️⚠️ Gunakan dengan bijak ‼️
├≽️⚠️ Bot ini berjalan ${kapanbotaktif} ‼️
├──────────────
├≽️✳️ Group WhatsApp ; ${grupch1}
├≽️✳️ YouTube : ${grupch2}
├──────────────
╰─────────
--==||| *POWERED BY ${BotName}* |||==--`
}
