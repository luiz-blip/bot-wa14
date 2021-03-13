exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES🍁*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*eits kamu belom daftar di DapBOT~ daftar dulu untuk menggunakan bot cara daftar ${prefix}daftar nama|umur*\n*contoh= ${prefix}daftar ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin DapBOT~ Dan Jangan Lupa Untuk Ketik ,rules sebelum memulai botnya ya😁`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╔════ ❰ *USER* ❱ ═════
║┣❥ *Nama* : ${pushname}
║┣❥ *Nomer* : wa.me/${sender.split("@")[0]}
║┣❥ *Uang mu* : Rp${uangku}
║┣❥ *XP* : ${getLevelingXp(sender)}/${reqXp}
║┣❥ *Level* : ${getLevelingLevel(sender)}
║┣❥ *User register* : ${_registered.length}
╚════ ⸨ *DapBOT~* ⸩  ═════

*YT = https://www.youtube.com/channel/UC8IMYvk5Vpze_9kRUwdecZw*
*IG = https://www.istagram/scytfdhd._*
*GC = https://chat.whatsapp.com/IUTT8Uv2LYbLcmL3OgBayB*
*OWNER = https://wa.me/6285876330812*

╔═════════════════❍
║⸨*ʙᴇʙᴇʀᴀᴘᴀ ꜰɪᴛᴜʀ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇᴇʙᴀɪᴋᴀɴ!!*⸩
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *ρяєfιχ ѕααт ιиι ${prefix}* ⸩
║⧐ ⸨ *кєтιк ${prefix}rules* ⸩
║⧐ ⸨ *кєтιк ${prefix}info* ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════❍

╔═════════════════════
║> *_Menu DapBOT~_*
╠═════════════════════
║┏━━⊱ ❰ *MAKER MENU* ❱ ⊰━━❤︎
║┣❥︎ *${prefix}sticker* Jika Video Max 9 Detik
║┣❥ *${prefix}gemboktext* 11 02 2021 Dappa dan Gaada:)
║┣❥ *${prefix}nulis* Nama/Kelas/Isi
║┣❥ *${prefix}lovemake* Dappa
║┣❥ *${prefix}ffbaner* DappaUhuy
║┣❥ *${prefix}textlight* DappaGanz
║┣❥ *${prefix}silktext* DappaTeros
║┣❥ *${prefix}slide* Dappa Ganz Banget
║┣❥ *${prefix}glitchtext* Dappa & Ganz
║┣❥ *${prefix}pornhub* Dappa & Hub
║┣❥ *${prefix}apiteks* DappaApi
║┣❥ *${prefix}hartatahta* Dappa
║┣❥ *${prefix}galaxtext* DappaUhuy
║┣❥ *${prefix}makequote* Bikin Quotes
║┣❥ *${prefix}toimg* Reply Stickee Biar Jadi Image
║┣❥ *${prefix}ocr* Kirim Foto Caption ${prefix}ocr
║┣━━⊱  ❰ *FUN MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}mining* Nambah Xp
║┣❥ *${prefix}bisakah* [Tag] Mempunyai Pacar?
║┣❥ *${prefix}kapankah* [Tag] Menikah
║┣❥ *${prefix}apakah* [Tag] Gay?
║┣❥ *${prefix}seberapagay* [Tag]
║┣❥ *${prefix}rate* Kirim Apapun Dengan Caption ${prefix}rate
║┣❥ *${prefix}truth* Wajib Jawab Jujur
║┣❥ *${prefix}dare* Bakal Dikasi Challenge
║┣❥ *${prefix}hobby* Ngarang Botnya Aoskaokw:v
║┣❥ *${prefix}fitnah* [Tag] & Anjg & Apaan Anjg?
║┣❥ *${prefix}pasangan* [ERROR]
║┣❥ *${prefix}ntahlah* Gajelas Coba Aja
║┣❥ *${prefix}slap* Toxic
║┣❥ *${prefix}caklontong* Kuis Cak Lontong
║┣❥ *${prefix}family100* Kuis Family100
║┣❥ *${prefix}tebakgambar* Suruh Nebak Gambar
║┣❥ *${prefix}kbbi* Pertanyaan
║┣❥ *${prefix}dadu* Yang Dapet Dadu Angka 6 Win
║┣❥ *${prefix}artinama* Nama Lu
║┣━━⊱  ❰ *SOUND MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}iri*
║┣❥ *${prefix}pale*
║┣❥ *${prefix}odading*
║┣❥ *${prefix}sound*
║┣❥ *${prefix}sound1*                                                                              
║┣❥ *${prefix}sound2*
║┣❥ *${prefix}sound3*
║┣❥ *${prefix}sound4*
║┣❥ *${prefix}sound5*
║┣❥ *${prefix}sound6*
║┣❥ *${prefix}sound7*
║┣❥ *${prefix}sound8*
║┣❥ *${prefix}sound9*                                                                              
║┣❥ *${prefix}sound10*
║┣❥ *${prefix}sound11*
║┣❥ *${prefix}sound12*
║┣❥ *${prefix}sound13*
║┣❥ *${prefix}sound14*
║┣❥ *${prefix}sound15*
║┣❥ *${prefix}sound16*
║┣❥ *${prefix}sound17*                                                                        
║┣❥ *${prefix}sound18*
║┣❥ *${prefix}sound19*
║┣❥ *${prefix}sound20*
║┣❥ *${prefix}sound21*
║┣❥ *${prefix}sound22*
║┣❥ *${prefix}sound23*
║┣❥ *${prefix}sound24*
║┣━━⊱  ❰ *ANIME MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}boruto*
║┣❥ *${prefix}rize*
║┣❥ *${prefix}kaneki*
║┣❥ *${prefix}wibu*
║┣❥ *${prefix}naruto*
║┣❥ *${prefix}avatar*
║┣❥ *${prefix}wallpapernime*
║┣❥ *${prefix}minato*                                                                              
║┣❥ *${prefix}miku*
║┣❥ *${prefix}animesaran*
║┣❥ *${prefix}animesaran2*
║┣❥ *${prefix}kurumi*
║┣❥ *${prefix}hinata*
║┣❥ *${prefix}sasuke*
║┣❥ *${prefix}sakura*
║┣❥ *${prefix}akira*
║┣❥ *${prefix}itori*
║┣❥ *${prefix}touka*
║┣❥ *${prefix}rem*
║┣❥ *${prefix}chika*
║┣❥ *${prefix}wait* [Kirim Foto Anime]
║┣━━⊱  ❰ *ISLAM MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}quran*
║┣❥ *${prefix}listsurah*
║┣━━⊱  ❰ *MEDIA MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}beritahoax* [ERROR]
║┣❥ *${prefix}brainly* Pertanyaan
║┣❥ *${prefix}pictcewek* Haluu Aja Teross
║┣❥ *${prefix}pictcowok* Haluu Aja Teross
║┣❥ *${prefix}pinterest* Searching Foto
║┣❥ *${prefix}husbu*
║┣❥ *${prefix}husbu2*
║┣❥ *${prefix}waifu*
║┣❥ *${prefix}waifu2*
║┣❥ *${prefix}loli*
║┣❥ *${prefix}loli2*
║┣❥ *${prefix}loli3*
║┣❥ *${prefix}hemkel* Kata Kata Hemkel Awoakwok:v
║┣❥ *${prefix}quoterandom*
║┣❥ *${prefix}katadoi*
║┣❥ *${prefix}katakatadilan*
║┣❥ *${prefix}neko*
║┣❥ *${prefix}nekonime*
║┣❥ *${prefix}randomanime*
║┣❥ *${prefix}randomhusbu*
║┣❥ *${prefix}randomcyberspace*
║┣❥ *${prefix}randomexo*
║┣❥ *${prefix}blackpink*
║┣❥ *${prefix}randomgame*
║┣❥ *${prefix}randommountain*
║┣❥ *${prefix}randomloli*
║┣❥ *${prefix}randomprogramer*
║┣❥ *${prefix}meme*
║┣❥ *${prefix}memeindo*
║┣❥ *${prefix}tts* id BRO ANDA GAY
║┣❥ *${prefix}hentai*
║┣❥ *${prefix}darkjokes* Lampu Woii
║┣❥ *${prefix}play* [Link]
║┣❥ *${prefix}lirik* Lagu
║┣❥ *${prefix}ssweb* Website Apa Aja
║┣❥ *${prefix}map*
║┣❥ *${prefix}tiktokstalk* Username TikTod
║┣❥ *${prefix}stalkig* Username Ig
║┣❥ *${prefix}afk*
║┣❥ *${prefix}unafk*
║┣❥ *${prefix}bass* Reply Audio
║┣❥ *${prefix}ytmp4* [Link]
║┣❥ *${prefix}ytmp3* [Link]
║┣━━⊱  ❰ *LIMIT MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}limit*
║┣❥ *${prefix}buylimit*
║┣❥ *${prefix}dompet*
║┣━━⊱  ❰ *NSFW MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}pokemon*
║┣❥ *${prefix}anjing*
║┣❥ *${prefix}nsfwloli*
║┣❥ *${prefix}nsfwneko*
║┣❥ *${prefix}solo*
║┣❥ *${prefix}nekopoi*
║┣❥ *${prefix}nsfwblowjob*
║┣❥ *${prefix}nsfwtrap*
║┣❥ *${prefix}nsfwpussy*
║┣❥ *${prefix}nsfwyuri*
║┣❥ *${prefix}bokep*
║┣❥ *${prefix}randombokep* Berdosaaaaa!!!!
║┣❥ *${prefix}ero*
║┣❥ *${prefix}nsfwloli2*
║┣❥ *${prefix}sideoppai*
║┣❥ *${prefix}nsfwwaifu*
║┣❥ *${prefix}nsfwpussy*
║┣❥ *${prefix}ecchi*
║┣❥ *${prefix}nekopoi* [Judul]
║┣━━⊱  ❰ *GROUP MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}hidetag*
║┣❥ *${prefix}del*
║┣❥ *${prefix}grouplist*
║┣❥ *${prefix}level*
║┣❥ *${prefix}leaderboard*
║┣❥ *${prefix}linkgc*
║┣❥ *${prefix}tagall*
║┣❥ *${prefix}setpp*
║┣❥ *${prefix}add*
║┣❥ *${prefix}kick*
║┣❥ *${prefix}setname*
║┣❥ *${prefix}setdesc*
║┣❥ *${prefix}demote*
║┣❥ *${prefix}promote*
║┣❥ *${prefix}listadmin*
║┣❥ *${prefix}group* [buka/tutup]
║┣❥ *${prefix}leveling* [enable/disable]
║┣❥ *${prefix}antilinkgrup* [1/0]
║┣❥ *${prefix}nsfw* [1/0]
║┣❥ *${prefix}simih* [1/0]
║┣❥ *${prefix}welcome* [1/0]
║┣━━⊱  ❰ *OWNER MENU* ❱  ⊰━━━❤︎
║┣❥ *${prefix}bc*
║┣❥ *${prefix}bcgc*
║┣❥ *${prefix}kickall* Mau Ngapain Tod? >:
║┣❥ *${prefix}setreply*
║┣❥ *${prefix}setprefix*
║┣❥ *${prefix}clearall*
║┣❥ *${prefix}block*
║┣❥ *${prefix}unblock*
║┣❥ *${prefix}listblock*
║┣❥ *${prefix}leave*
║┣❥ *${prefix}event* [1/0]
║┣❥ *${prefix}clone*
║┣❥ *${prefix}setbotpp*
║┣━━⊱ ❰ *TQTO* ❱ ⊰━━❤︎
║┣➣ *Allah SWT*
║┣➣ *DappaUhuy* 
║┣➣ *AlpinOFC* 
║┗━━⊱  ⸨ *DapBOT~* ⸩  ⊰━━━
╚═══════════════════>
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomer* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
