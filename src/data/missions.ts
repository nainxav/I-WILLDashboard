export interface Chronicle {
    id: string;
    slug: string; // URL-friendly identifier
    title: string;
    excerpt: string;
    content: string; // Full content
    image: string;
    category: "COMPETITION" | "EXHIBITION" | "PKM" | "GRANT" | "WORKSHOP";
    date: string; // Publish date or Event date
    author: string; // Team name or Member name
    tags: string[];
    link: string; // External link or internal slug
}

export const chronicles: Chronicle[] = [
    {
        id: "c-bond-time-jan-2025",
        slug: "iwill-bond-time-subang-jan-2025",
        title: "IWILL’s Bond Time: Kehangatan Awal Tahun di Subang 🌲🔥",
        excerpt: "IWILL’s Bond Time pada 3–4 Januari kemarin menjadi momen yang penuh euforia dan kehangatan bagi kami.",
        content: `
            <p><strong>IWILL’s Bond Time pada 3–4 Januari kemarin menjadi momen yang penuh euforia dan kehangatan bagi kami.</strong></p>
            <p>Menginap bersama di sebuah villa di Subang, Jawa Barat, kami benar-benar menikmati setiap detik kebersamaan yang tercipta. Mulai dari makan bersama yang penuh canda, membakar jagung sambil berbagi cerita, bermain berbagai games seru, hingga obrolan larut malam yang membuat kami semakin dekat satu sama lain.</p>
            <p>Kegiatan sederhana ini terasa sangat berarti karena kami bisa tertawa lepas, saling menguatkan, dan mempererat ikatan sebagai satu keluarga besar IWILL. Terima kasih untuk semua energi positif yang dibawa oleh setiap orang. Semoga semangat dan kebersamaan ini terus hidup dalam setiap langkah kita ke depan 🤍✨</p>
        `,
        image: "",
        category: "WORKSHOP", // Internal gathering
        date: "2026-01-03",
        author: "HR Division",
        tags: ["Bonding", "Team Building", "Culture", "Subang"],
        link: "#"
    },
    {
        id: "c-visit-prof-thies",
        slug: "visit-prof-thies-krueger-germany",
        title: "Kunjungan Prof. Thies Krüger: Kerja Sama Internasional Itenas-Jerman 🇩🇪",
        excerpt: "Itenas Bandung menerima kunjungan Prof. Thies Krüger dari Jerman, membahas student exchange dan kolaborasi riset.",
        content: `
            <p><strong>Itenas Bandung</strong> menerima kunjungan dari <strong>Prof. Thies Krüger</strong> (Magdeburg-Stendal University of Applied Sciences, Germany) sebagai langkah lanjutan dari kerja sama internasional yang telah dijalin.</p>
            <p>Disambut langsung oleh Rektor Prof. Ir. Meilinda Nurbanasari, S.T., M.T., Ph.D., dan didampingi oleh dosen DKV Dr. phil. Eka Noviana, M.A., kunjungan ini membahas implementasi konkret seperti program <strong>student exchange</strong>, <strong>kolaborasi riset</strong>, hingga <strong>pengembangan kurikulum internasional</strong>.</p>
            
            <p>Prof. Krüger juga berkesempatan mengunjungi laboratorium unggulan Itenas:</p>
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Lab I-WILL Informatika</strong> bersama Dr. sc. Lisa Kristiana, S.T., M.T. & tim.</li>
                <li><strong>Lab Perancangan Kendaraan Listrik & Bio CNG</strong> bersama Prof. Ir. Tarsisius Kristyadi, S.T., M.T., Ph.D. & tim.</li>
                <li><strong>Workshop Riset Bonggol Jagung & Desain Produk</strong> bersama Dr. Andry Masri, M.Sn. dan Maharani Dian Permanasari, S.Ds., M.Ds., M.Phil., Ph.D.</li>
            </ul>
            <p class="mt-4">Kunjungan ini memperkuat komitmen Itenas sebagai kampus yang terbuka terhadap kolaborasi lintas negara demi kemajuan pendidikan, inovasi, dan keberlanjutan global. 🌏✨</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2025-07-05", // Estimated based on flow
        author: "International Office",
        tags: ["International Visit", "Germany", "Collaboration", "Itenas"],
        link: "#"
    },
    {
        id: "c-pikir-2025-finalists",
        slug: "i-will-teams-finalists-pikir-2025",
        title: "Dua Tim I-WILL Melaju ke Final Nasional PIKIR 2025! 💡🔥",
        excerpt: "Bangga! Dua tim dari Laboratorium I-WILL berhasil melaju ke babak final nasional ajang PIKIR 2025 di Makassar.",
        content: `
            <p>Dua tim dari Laboratorium <strong>I-WILL (Innovative Workingspace Integrated Living Laboratory)</strong> berhasil melaju ke babak final nasional ajang <strong>PIKIR 2025 (Pekan Ilmiah dan Kreatifitas Remaja)</strong> yang akan digelar pada 26–30 Juni 2025 di Universitas Muhammadiyah Makassar! 🇮🇩🎓</p>

            <h3 class="mt-4">📌 Finalis Kategori Karya Tulis Ilmiah:</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>
                    <strong>Tim Netra Dump</strong><br/>
                    Anggota: Malendra, Ari, dan Lingga
                </li>
                <li>
                    <strong>Tim Donimal</strong><br/>
                    Anggota: Ikrima dan Sondang
                </li>
            </ul>

            <p class="font-bold mt-6">Bangga atas pencapaian luar biasa ini! Semangat bertanding dan terus bawa nama baik kampus di panggung nasional!</p>
        `,
        image: "",
        category: "COMPETITION",
        date: "2025-05-30",
        author: "I-WILL Team",
        tags: ["PIKIR 2025", "Finalists", "Competition", "Research"],
        link: "#"
    },
    {
        id: "c-open-campus-2025",
        slug: "i-will-at-open-campus-2025",
        title: "I-WILL at OPEN CAMPUS 2025: Welcoming Future Innovators 👩💻",
        excerpt: "It was such a great experience welcoming high school and vocational students to explore the world of Informatics at Open Campus 2025.",
        content: `
            <p><strong>Grateful to have been part of OPEN CAMPUS 2025 at ITENAS on Saturday, May 24th!</strong></p>
            <p>It was such a great experience welcoming high school and vocational students to explore the world of Informatics.</p>
            <p class="font-bold mt-4">Thank you to everyone who stopped by—see you in the future! 👩💻👨💻</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2025-05-24",
        author: "Public Relations",
        tags: ["Open Campus", "Exhibition", "High School", "Informatics"],
        link: "#"
    },
    {
        id: "c-syukuran-apresiasi-2025",
        slug: "syukuran-apresiasi-tim-i-will-ict-wit",
        title: "Syukuran & Apresiasi: Penghargaan untuk Dedikasi Tim 🏆",
        excerpt: "Itenas menggelar acara Syukuran dan Apresiasi sebagai bentuk penghargaan kepada tim I-WILL, ICT, dan WIT atas prestasi gemilang mereka.",
        content: `
            <p>Institut Teknologi Nasional Bandung menggelar acara <strong>Syukuran dan Apresiasi</strong> sebagai bentuk penghargaan kepada tim <strong>I-WILL, ICT, dan WIT</strong> atas dedikasi, kerja keras, dan prestasi gemilang yang telah diraih.</p>
            <p>Melalui inovasi, semangat kolaborasi, dan komitmen yang tinggi, mereka berhasil mengharumkan nama institusi di kancah nasional maupun internasional. ✨</p>
        `,
        image: "",
        category: "COMPETITION", // Using Competition category as it relates to awards
        date: "2025-05-20",
        author: "Itenas Official",
        tags: ["Appreciation", "Awards", "Syukuran", "Community"],
        link: "#"
    },
    {
        id: "c-tahura-bonding",
        slug: "team-bonding-tahura-2025",
        title: "Reconnecting with Nature: I-WILL Team Bonding at Tahura 🌿",
        excerpt: "On May 18th, 2025, the I-WILL team took a step back from the screens and into the serenity of nature at Tahura.",
        content: `
            <p>On May 18th, 2025, the I-WILL team took a step back from the screens and into the serenity of nature. Surrounded by the lush greenery of <strong>Tahura</strong>, we reconnected—not just with each other, but with ourselves.</p>
            <p>A day of laughter, stories, and quiet healing. Here’s to stronger bonds and more moments like this.</p>
        `,
        image: "",
        category: "WORKSHOP", // "Workshop" roughly fits "Activity/Event"
        date: "2025-05-18",
        author: "I-WILL Team",
        tags: ["Team Bonding", "Nature", "Tahura", "Mental Health"],
        link: "#"
    },
    {
        id: "c-pussimpur-visit-2",
        slug: "pussimpur-kodiklatad-visit-may-2025",
        title: "Kunjungan Kedua PUSSIMPUR Kodiklatad: Memperkuat Strategi Militer 🇮🇩",
        excerpt: "Pusat Simulasi Tempur (PUSSIMPUR) KODIKLATAD kembali melakukan kunjungan ke I-WILL untuk bertukar wawasan teknologi militer.",
        content: `
            <p><strong>Pusat Simulasi Tempur (PUSSIMPUR) KODIKLATAD</strong> kembali melakukan kunjungan ke I-WILL pada hari Kamis, 8 Mei 2025.</p>
            <p>Kunjungan ini bertujuan untuk menjalin kerja sama serta bertukar wawasan terkait perkembangan teknologi dalam mendukung <strong>strategi militer</strong>.</p>
        `,
        image: "",
        category: "EXHIBITION", // "Exhibition/Visit"
        date: "2025-05-08",
        author: "Public Relations",
        tags: ["PUSSIMPUR", "TNI AD", "Military Tech", "Collaboration"],
        link: "#"
    },
    {
        id: "c-pussimpur-visit-1",
        slug: "pussimpur-kodiklat-tni-ad-visit-april-2025",
        title: "Kunjungan PUSSIMPUR Kodiklat TNI AD: Inovasi Simulasi Tempur ⚔️",
        excerpt: "Kami mendapat kehormatan menerima kunjungan dari perwakilan PUSSIMPUR Kodiklat TNI AD, berfokus pada inovasi simulasi pertempuran.",
        content: `
            <p>Pada tanggal 30 April 2025, kami mendapat kehormatan untuk menerima kunjungan dari perwakilan <strong>PUSSIMPUR (Pusat Simulasi Tempur) Kodiklat TNI AD</strong> ke I-WILL Lab. Dalam kunjungan tersebut, kami saling bertukar ide, berbagi visi, dan terlibat dalam sesi diskusi yang produktif 💡 dengan fokus pada inovasi masa depan dalam <strong>simulasi pertempuran</strong> dan <strong>teknologi militer</strong>.</p>
            <p>Kerja sama ini bertujuan untuk meningkatkan alat simulasi yang akan digunakan oleh PUSSIMPUR Kodiklatad. Kami sangat antusias terhadap peluang yang dapat dihasilkan dari kolaborasi ini dan siap bekerja sama untuk menciptakan solusi yang berdampak dan inovatif! 🤝✨</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2025-04-30",
        author: "Public Relations",
        tags: ["PUSSIMPUR", "TNI AD", "Simulation", "Military Tech"],
        link: "#"
    },
    {
        id: "c-open-recruitment-arc-01",
        slug: "open-recruitment-arc-01-calling-innovators",
        title: "I-WILL Open Recruitment: ARC-01 🌟",
        excerpt: "The wait is over—ARC-01 Open Recruitment is officially open! Calling all innovators, researchers, and changemakers!",
        content: `
            <p><strong>Calling all innovators, researchers, and changemakers! 🌟</strong></p>
            <p>The wait is over—ARC-01 Open Recruitment is officially open! Whether you’re ready to grow individually or want to innovate as a team, I-WILL has a track for you.</p>
            
            <h3>🔹 INDIVIDUAL TRACK</h3>
            <p>For passionate students ready to contribute to ongoing research and real projects!</p>
            <p><strong>Requirements:</strong> Preferably from Informatics batch 2023/2024, interested in one of the ongoing research projects.</p>
            <p><strong>Available Projects:</strong> Angklungine X, Drone, Smart Train, ExploRC.</p>
            
            <h3>🔸 TEAM INNOVATION TRACK</h3>
            <p>Have a brilliant idea with your friends? Pitch your own product or innovation and bring it to life as a team!</p>
            <p><strong>Eligibility:</strong> Open to all majors and batches, teams of up to 5 members.</p>
            
            <p class="mt-4"><strong>🔗 Apply now:</strong> <a href="https://bit.ly/OpenRecruitmentARC-01" target="_blank" class="text-primary underline">bit.ly/OpenRecruitmentARC-01</a></p>
            <p class="text-sm text-muted-foreground mt-2">Registration Deadline: April 22, 2025 (Individual) / April 25, 2025 (Team)</p>
        `,
        image: "",
        category: "COMPETITION", 
        date: "2025-04-16",
        author: "HR Division",
        tags: ["Recruitment", "ARC-01", "Innovation", "Research"],
        link: "https://bit.ly/OpenRecruitmentARC-01"
    },
    {
        id: "c-open-house-2025",
        slug: "i-will-open-house-recap-2025",
        title: "Open House I-WILL: Momen Luar Biasa & Awal Baru ✨",
        excerpt: "Open House iWill benar-benar menjadi momen yang luar biasa, membuka pintu bagi kolaborasi baru dan mempererat relasi.",
        content: `
            <p>Open House I-WILL benar-benar menjadi momen yang luar biasa, dan semua ini tidak akan pernah terwujud tanpa dukungan luar biasa, antusiasme tinggi, serta partisipasi aktif dari kalian semua. Mulai dari diskusi panel yang membuka wawasan, demo interaktif yang seru, sampai obrolan mendalam yang penuh inspirasi, acara ini bukan cuma ajang pameran tapi menjadi ruang untuk terhubung, berbagi semangat, dan tumbuh bersama.</p>
            <p>Setiap peserta membawa energi dan perspektif yang unik, membuat suasana semakin hidup dan bermakna. Ini adalah bukti nyata bahwa ketika komunitas bersatu dengan semangat yang sama, hal besar bisa terjadi.</p>
            <p>Saat kita menatap ke depan, Open House ini hanyalah awal dari begitu banyak kemungkinan menarik yang akan datang. Acara ini membuka pintu bagi kolaborasi baru, mempererat relasi yang telah ada, dan memperkuat keyakinan kami bahwa dengan kerja sama, pemikiran berani, dan hati yang tulus, kita bisa menciptakan dampak nyata.</p>
            <p class="font-bold mt-4">Terima kasih sudah menjadi bagian dari perjalanan ini. Kami nggak sabar buat melangkah ke masa depan bersama kalian semua. 🚀</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2025-02-26",
        author: "Public Relations",
        tags: ["Open House", "Community", "Exhibition", "Networking"],
        link: "#"
    },
    {
        id: "c-icsit-award-2025",
        slug: "greener-itenas-icsit-excellence-award-2025",
        title: "Greener Itenas Raih Excellence Awards di ICSIT 2025! 🏆",
        excerpt: "Selamat dan apresiasi setinggi-tingginya kepada tim Greener Itenas dari Lab I-WILL yang berhasil meraih Excellence Awards pada ajang internasional ICSIT 2025.",
        content: `
            <p><strong>Selamat dan apresiasi setinggi-tingginya kepada tim Greener Itenas dari Lab I-WILL yang berhasil meraih Excellence Awards pada ajang internasional ICSIT 2025.</strong></p>
            <p>Prestasi ini menjadi bukti kolaborasi tim serta komitmen dalam membawa inovasi berkelanjutan ke kancah global. Tim ini dibentuk oleh orang - orang hebat dengan komposisi tim:</p>
            
            <ul class="list-none pl-0 space-y-1 mt-2">
                <li><strong>Supervisor:</strong> Galih Ashari R, S.Si., M.T.</li>
                <li><strong>Ketua tim:</strong> Malendra Sahla R. (152024002)</li>
                <li><strong>Anggota:</strong>
                    <ul class="list-disc pl-5">
                        <li>Ari Ferdiana (152024003)</li>
                        <li>Zakhwa Aliya (152024032)</li>
                        <li>Muhammad Lingga D. (152024042)</li>
                    </ul>
                </li>
            </ul>
            
            <p class="mt-4">Terima kasih atas dedikasi dan kerja keras yang telah mengharumkan nama ITENAS dan Lab IWILL di tingkat internasional. 👏🌍</p>
        `,
        image: "",
        category: "COMPETITION",
        date: "2024-12-22",
        author: "I-WILL Team",
        tags: ["Achievement", "International Award", "ICSIT", "Greener Itenas"],
        link: "#"
    },
    {
        id: "c-prokimnas-grant-2025",
        slug: "agrovision-prokimnas-grant-2025",
        title: "Tim Agrovision Raih Pendanaan Hibah Prokimnas 2025! 🌱",
        excerpt: "Selamat kepada tim Agrovision dari Lab I-WILL yang berhasil meraih pendanaan hibah pada Prokimnas 2025.",
        content: `
            <p><strong>Selamat kepada tim Agrovision dari Lab I-WILL yang berhasil meraih pendanaan hibah pada Prokimnas 2025.</strong></p>
            <p>Pencapaian ini menjadi bentuk kepercayaan terhadap gagasan inovatif yang memiliki potensi nyata untuk dikembangkan dan memberi dampak. Tim ini dibentuk oleh orang - orang hebat dengan komposisi tim:</p>
            
            <ul class="list-none pl-0 space-y-1 mt-2">
                <li><strong>Supervisor:</strong> Dr. sc. Lisa Kristiana, S.T., M.T.</li>
                <li><strong>Ketua tim:</strong> Zakhwa Aliya (152024032)</li>
                <li><strong>Anggota:</strong>
                    <ul class="list-disc pl-5">
                        <li>Farhan Kamil H (152024150)</li>
                        <li>Najwa Hikmatyar (152024162)</li>
                    </ul>
                </li>
            </ul>
            
            <p class="mt-4">Semoga pencapaian ini menjadi langkah awal menuju pengembangan riset dan inovasi yang lebih luas serta menginspirasi mahasiswa lainnya untuk terus berkarya. 🚀✨</p>
        `,
        image: "",
        category: "GRANT",
        date: "2024-12-22",
        author: "I-WILL Team",
        tags: ["Achievement", "Grant", "Prokimnas", "Agrovision"],
        link: "#"
    },
    {
        id: "c-dies-natalis-53",
        slug: "dies-natalis-itenas-53-visit-dirjen",
        title: "Selamat Dies Natalis Itenas ke-53! 🎂🚀",
        excerpt: "Hari yang penuh euforia yang disaksikan langsung oleh jajaran Direktorat Jenderal Risbang dan para rektor dari universitas lain!",
        content: `
            <p><strong>Selamat Dies Natalis Itenas ke-53! 🎂</strong></p>
            <p>Hari yang penuh euforia yang disaksikan langsung oleh jajaran Direktorat Jenderal Risbang dan para rektor-rektor dari universitas lain!</p>
            <p>Kebanggaan kami semakin bertambah dengan kunjungan kehormatan ke Lab I-WILL yang menjadi penambah semangat kami untuk terus melahirkan karya nyata bagi bangsa. I-WILL, semakin melesat!🚀</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-12-14",
        author: "Public Relations",
        tags: ["Dies Natalis", "Itenas", "Celebration", "Visit"],
        link: "#"
    },
    {
        id: "c-visit-labschool-upi-nov-2024",
        slug: "visit-sma-labschool-upi-cibiru-nov-2024",
        title: "Kunjungan Menyenangkan dari Adik-Adik SMA Labschool UPI Cibiru! 🎓",
        excerpt: "Tim kami menjelaskan alur kerja produk sampai proses pengujian kepada adik-adik SMA Labschool UPI Cibiru.",
        content: `
            <p><strong>Kunjungan menyenangkan dari adik adik SMA Labschool UPI Cibiru!</strong></p>
            <p>Tim kami menjelaskan alur kerja produk sampai proses pengujian. Mereka melihat robot edukasi melakukan tugas dasar yang biasa dipakai untuk latihan logika dan kontrol gerak. Para siswa menanyakan cara memilih perangkat, cara membuat rancangan, dan cara menguji fitur baru.</p>
            <p>Mereka mencoba beberapa produk kami. Mereka melihat bagaimana data muncul di layar dan bagaimana perubahan kecil di kode memberi dampak pada perilaku sistem. Kunjungan ini memberi mereka gambaran tentang proses berpikir di bidang teknik. Mereka melihat kegiatan harian di lab seperti perbaikan rangkaian, pengukuran, debugging, dan pembuatan prototipe.</p>
            <p>Suasana diskusi berjalan aktif karena banyak dari mereka yang ingin tahu arah studi, peluang proyek, dan kegiatan teknologi yang bisa mereka ikuti. Kami berharap sesi ini membantu mereka memahami dunia rekayasa dan memberi motivasi untuk terus mengembangkan minat mereka di bidang teknologi.</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-11-28",
        author: "Public Relations",
        tags: ["School Visit", "Education", "Robotics", "Engineering"],
        link: "#"
    },
    {
        id: "c-visit-kv-ampangan-nov-2024",
        slug: "visit-kv-ampangan-malaysia-nov-2024",
        title: "Kunjungan Kolej Vokasional Ampangan, Malaysia (ID x MY) 🇮🇩🇲🇾",
        excerpt: "Hari ini Lab I-WILL menerima kunjungan dari Kolej Vokasional Ampangan, Malaysia! Kami memperkenalkan produk-produk unggulan lab.",
        content: `
            <p><strong>🇮🇩 x 🇲🇾 Hari ini Lab I-WILL menerima kunjungan dari Kolej Vokasional Ampangan, Malaysia!</strong></p>
            <p>Kami memperkenalkan produk-produk yang ada di lab dan menjelaskan fitur - fiturnya. Kami menunjukkan penggunaan sensor, robotik, dan IoT yang membantu mahasiswa mengukur data, menguji model, dan memahami alur kerja teknologi secara langsung.</p>
            <p>Disini juga, kami menjelaskan contoh proyek yang sudah berjalan, termasuk pengembangan sistem otomatisasi dan pemantauan berbasis komputasi kecil. Di dalamnya, berbagi pengalaman tentang metode pembelajaran berbasis proyek yang membuat mahasiswa lebih siap menghadapi kebutuhan industri.</p>
            <p>Tidak lupa, kami berdiskusi tentang peluang kolaborasi pendidikan, riset bersama, serta pertukaran teknologi yang bisa memperluas dampak pembelajaran bagi kedua institusi. Kami berharap kunjungan ini menjadi langkah awal untuk membangun program bersama yang mendorong inovasi di bidang teknik dan teknologi terapan!</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-11-24",
        author: "Public Relations",
        tags: ["International Visit", "Malaysia", "KV Ampangan", "Collaboration"],
        link: "#"
    },
    {
        id: "c-visit-lldikti",
        slug: "visit-from-lldikti-nov-2024",
        title: "Another Visit to I-WILL: Hosting LLDIKTI! 🎉",
        excerpt: "On November 20, 2024, I-WILL had the honor of hosting a visit from LLDIKTI, fostering a meaningful exchange of insights.",
        content: `
            <p>On November 20, 2024, I-WILL had the honor of hosting a visit from <strong>LLDIKTI</strong>. 🎉 This exciting event brought together dozens of distinguished officials from LLDIKTI, fostering a meaningful exchange of insights and ideas. 🤝✨</p>
            <p>This momentous occasion highlights the strong collaboration and shared commitment to advancing education and innovation. 🎓💡</p>
            <p class="font-bold mt-4">A heartfelt thank you to everyone who participated and made this visit truly memorable! 🙌🎊</p>
        `,
        image: "",
        category: "EXHIBITION", 
        date: "2024-11-20",
        author: "Public Relations",
        tags: ["LLDIKTI", "Visit", "Collaboration", "Education"],
        link: "#"
    },
    {
        id: "c-celebration-wins",
        slug: "celebration-of-wins-lintas-ormawa-hology",
        title: "Celebration of Wins: Lintas Ormawa & Hology 7.0 🏆",
        excerpt: "I-WILL merayakan pencapaian luar biasa dengan 5 penghargaan dari Lintas Ormawa dan Hology 7.0.",
        content: `
            <p>Sebagai bentuk penghargaan atas pencapaian luar biasa dari tim kolaboratif I-WILL, ICT Huawei, dan Women in Tech (WIT) yang baru saja kembali dengan kemenangan dari Malang, I-WILL akan mengadakan acara <strong>after-party spesial</strong>.</p>
            <p>Tim ini menunjukkan bakat, semangat, dan dedikasi yang luar biasa, berhasil membawa pulang total <strong>5 penghargaan</strong> dari dua ajang bergengsi: <strong>Lintas Ormawa</strong> dan <strong>Hology 7.0</strong>. Kemenangan ini tidak hanya menjadi bukti nyata dari kerja keras dan kolaborasi yang solid, tetapi juga menjadi inspirasi bagi komunitas untuk terus berkembang dan berinovasi.</p>
            <p>Perayaan ini akan menjadi momen yang hangat untuk mengenang perjuangan, tantangan, dan kebersamaan yang telah dilalui. After-party ini tidak hanya menjadi ajang refleksi atas pencapaian mereka, tetapi juga kesempatan emas untuk mengungkapkan apresiasi setinggi-tingginya kepada semua pihak yang telah terlibat dan mendukung proses hingga tercapainya keberhasilan ini.</p>
            <p class="font-bold mt-4">Semangat kebersamaan dan solidaritas inilah yang akan terus menjadi fondasi dalam meraih prestasi-prestasi gemilang di masa depan.</p>
        `,
        image: "",
        category: "COMPETITION",
        date: "2024-11-11",
        author: "I-WILL Team",
        tags: ["Awards", "Winning", "Lintas Ormawa", "Hology 7.0", "Celebration"],
        link: "#"
    },
    {
        id: "c-visit-ipwija",
        slug: "visit-from-ipwija-jakarta-university",
        title: "Hosting a Visit from IPWIJA Jakarta University 🎓",
        excerpt: "I-WILL had the pleasure of hosting a visit from IPWIJA Jakarta University, filled with inspiring discussions.",
        content: `
            <p>I-WILL had the pleasure of hosting a visit from <strong>IPWIJA Jakarta University</strong>! The day was filled with inspiring discussions, knowledge-sharing, and ideas for future research to advance technology and learning.</p>
            <p class="font-bold mt-4">A big thank you to IPWIJA for an insightful and motivating visit! 🤝✨</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-11-01",
        author: "Public Relations",
        tags: ["Visit", "IPWIJA", "University Collaboration", "Research"],
        link: "#"
    },
    {
        id: "c-visit-formulatrix-oct-2024",
        slug: "visit-formulatrix-bandung-oct-2024",
        title: "Kunjungan Spesial dari Formulatrix Bandung Innovation Lab! 🤝✨",
        excerpt: "I-WILL Lab menerima kunjungan spesial dari Formulatrix Bandung Innovation Lab, berbagi banyak wawasan inspiratif.",
        content: `
            <p><strong>I-WILL Lab menerima kunjungan spesial dari Formulatrix Bandung Innovation Lab! 🤝✨</strong></p>
            <p>Dalam kunjungan ini, tim Formulatrix berbagi banyak wawasan inspiratif seputar dunia inovasi dan memperkenalkan berbagai proyek menarik yang tengah mereka kembangkan. Sesi ini menjadi kesempatan berharga bagi kami untuk belajar langsung dari para profesional yang telah berpengalaman di bidang riset dan teknologi.</p>
            <p>Terima kasih Formulatrix atas kunjungannya dan ilmu yang dibagikan! Semoga pertemuan ini menjadi langkah awal menuju kolaborasi yang semakin inovatif di masa depan. 🚀💡</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-10-31",
        author: "Public Relations",
        tags: ["Industry Visit", "Formulatrix", "Innovation", "Research"],
        link: "#"
    },
    {
        id: "c-visit-univ-ekuitas-oct-2024",
        slug: "visit-universitas-ekuitas-oct-2024",
        title: "Kunjungan Spesial dari Universitas Ekuitas! 🎓🤝",
        excerpt: "Hari ini I-WILL Lab mendapat kunjungan spesial dari Universitas Ekuitas! Momen berharga untuk berbagi pengalaman dan wawasan.",
        content: `
            <p><strong>Hari ini I-WILL Lab mendapat kunjungan spesial dari Universitas Ekuitas! 🎓🤝</strong></p>
            <p>Kunjungan ini menjadi momen berharga untuk saling berbagi pengalaman, wawasan, serta inspirasi seputar pengembangan inovasi dan teknologi. Melalui diskusi yang hangat dan interaktif, kami berharap kunjungan ini dapat membuka peluang kolaborasi baru antara dunia akademik dan pengembangan riset di laboratorium.</p>
            <p>Terima kasih kepada Universitas Ekuitas atas kunjungannya! Semoga pertemuan ini menjadi langkah awal menuju sinergi yang lebih kuat dan berkelanjutan di masa depan. 🚀✨</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-10-17",
        author: "Public Relations",
        tags: ["University Visit", "Ekuitas", "Collaboration", "Academic"],
        link: "#"
    },
    {
        id: "c-project-batch-1",
        slug: "i-will-project-batch-1-kickoff",
        title: "Kickoff Project Batch 1: The Future of Technology Starts Here! 🚀",
        excerpt: "I-WILL secara resmi memulai Project Batch 1, menandai tonggak awal inovasi masa depan dengan berbagai proyek teknologi mutakhir.",
        content: `
            <p>I-WILL secara resmi memulai <strong>Project Batch 1</strong> melalui suatu pertemuan yang dinamis serta sangat dinanti-nantikan oleh seluruh anggota tim. Pertemuan ini menjadi tonggak awal yang menetapkan arah dan semangat untuk masa depan yang sarat dengan inovasi serta kolaborasi mutakhir.</p>

            <p>Seluruh tim menunjukkan antusiasme yang tinggi untuk terus mendorong batas-batas teknologi, kreativitas, dan kemampuan pemecahan masalah guna menghasilkan solusi yang berdampak nyata di berbagai bidang. Pencapaian ini menandai permulaan dari sebuah perjalanan yang menarik, yang diyakini akan membentuk masa depan perangkat pintar, kecerdasan buatan, dan Internet of Things (IoT) di Indonesia.</p>

            <h3>Rangkaian Proyek Batch 1:</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Interactive Electric Drum</strong></li>
                <li><strong>Train Monitoring Headquarters</strong></li>
                <li><strong>Humanoid Robot using Oqulus Quest</strong></li>
                <li><strong>Angklung Goes to the Next Level</strong></li>
                <li><strong>Drone: Surveillance for Combat Situations</strong></li>
                <li><strong>Incube:</strong> IoT Egg Incubator</li>
                <li><strong>Cheat Detection</strong> using Video Processing</li>
            </ul>

            <p class="mt-4">Dengan dimulainya rangkaian proyek ini, I-Will menegaskan komitmennya untuk menjadi pelopor dalam pengembangan teknologi di Indonesia.</p>

            <p class="font-bold text-center mt-6 text-lg">The Future of Technology Starts Here!</p>
        `,
        image: "", // Placeholder
        category: "WORKSHOP", 
        date: "2024-10-03",
        author: "I-WILL Core Team",
        tags: ["Project Kickoff", "Innovation", "IoT", "AI", "Robotics"],
        link: "#"
    },
    {
        id: "c-kunjungan-bintulu",
        slug: "kunjungan-kolej-vokasional-bintulu-malaysia",
        title: "I-WILL Menyambut Kunjungan dari Kolej Vokasional Bintulu, Malaysia 🇲🇾",
        excerpt: "I-WILL dengan penuh sukacita menerima kunjungan dari Kolej Vokasional Bintulu, Malaysia, untuk mempererat kerja sama internasional.",
        content: `
            <p>I-WILL baru-baru ini dengan penuh sukacita menerima kunjungan dari <strong>Kolej Vokasional Bintulu, Malaysia</strong>. Kunjungan ini merupakan suatu kehormatan yang sangat berarti bagi kami, karena memberikan peluang yang berharga untuk mempererat hubungan kerja sama internasional, khususnya di bidang pendidikan dan teknologi.</p>

            <p>Selama kunjungan berlangsung, kami menyambut para tamu dengan hangat dan antusias, serta berupaya memberikan gambaran yang komprehensif mengenai berbagai produk inovatif yang telah berhasil dikembangkan oleh tim I-WILL. Produk-produk tersebut merupakan hasil dari proses penelitian, pengembangan, dan kolaborasi yang berkelanjutan, yang bertujuan untuk memberikan solusi yang relevan dan berdampak positif bagi masyarakat.</p>

            <p>Selain memamerkan produk-produk unggulan, kami juga berkesempatan untuk berbagi wawasan mengenai proses kerja yang kami terapkan, mulai dari tahap perencanaan, pelaksanaan, hingga evaluasi setiap proyek. Kami menjelaskan secara rinci mengenai strategi pengembangan teknologi yang kami lakukan, serta tantangan dan peluang yang kami hadapi dalam menciptakan inovasi di era digital saat ini.</p>

            <p>Tidak hanya itu, kami juga berbagi pengalaman mengenai pentingnya kerja sama tim, komunikasi yang efektif, dan komitmen terhadap kualitas dalam setiap langkah pengembangan produk.</p>

            <p class="mt-4">Melalui pertukaran pengetahuan dan pengalaman yang terjadi selama kunjungan ini, kami berharap dapat mendorong terciptanya kolaborasi yang lebih erat dan berkelanjutan di masa mendatang. Kami meyakini bahwa sinergi antara institusi pendidikan dan pelaku industri sangat penting untuk mendorong kemajuan teknologi dan menciptakan inovasi yang bermanfaat bagi masyarakat luas.</p>

            <p class="font-bold mt-4">Semoga kunjungan ini dapat menjadi awal yang baik bagi terjalinnya hubungan yang harmonis dan saling menginspirasi antara I-WILL dan Kolej Vokasional Bintulu dalam mengembangkan inovasi di bidang teknologi. 🤝🚀</p>
        `,
        image: "", // Valid placeholder - likely a visit photo
        category: "EXHIBITION", 
        date: "2024-09-18",
        author: "Public Relations",
        tags: ["International Visit", "Malaysia", "Kolej Vokasional Bintulu", "Collaboration"],
        link: "#"
    },
    {
        id: "c-visit-nit-jamshedpur-sep-2024",
        slug: "visit-nit-jamshedpur-india-sep-2024",
        title: "Kunjungan National Institute of Technology (NIT) Jamshedpur, India 🇮🇩🇮🇳",
        excerpt: "Lab I-WILL mendapatkan kesempatan istimewa untuk menerima kunjungan khusus dari National Institute of Technology (NIT) Jamshedpur, India.",
        content: `
            <p><strong>🇮🇩 x 🇮🇳 Kali ini, lab I-WILL mendapatkan kesempatan istimewa untuk menerima kunjungan khusus dari National Institute of Technology (NIT) Jamshedpur, India.</strong></p>
            <p>Kunjungan ini menjadi momen yang berharga untuk saling berbagi gagasan, pengalaman, serta pengetahuan mengenai inovasi dan pengembangan teknologi. Tidak hanya sekadar ajang bertemu dan menjalin silaturahmi, tetapi juga sebagai awal dari upaya memperkuat kerja sama antar negara dalam membangun ekosistem penelitian dan pendidikan yang lebih berkualitas.</p>
            <p>Semoga kunjungan ini menjadi awal dari kolaborasi internasional yang menarik dan mendorong semangat untuk terus berinovasi tanpa batas. 🌍🤝</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-09-18",
        author: "International Office",
        tags: ["International Visit", "India", "NIT Jamshedpur", "Collaboration"],
        link: "#"
    },
    {
        id: "c-visit-blk-and-progress-sep-2024",
        slug: "visit-blk-trimega-arc-01-progress-sep-2024",
        title: "Kunjungan BLK PT. Trimega Kreasi Intinusa & ARC-01 Progress Report",
        excerpt: "I-WILL menerima kunjungan dari BLK PT. Trimega Kreasi Intinusa sekaligus mempresentasikan laporan progress dari ARC-01.",
        content: `
            <p>Dengan perasaan senang, kami menerima kunjungan dari <strong>Badan Latihan Kerja (BLK) PT. Trimega Kreasi Intinusa (Essential Kopi)</strong>. Kunjungan ini menjadi kesempatan berharga untuk saling berbagi pengalaman, pengetahuan, dan wawasan seputar pengembangan keterampilan serta inovasi di dunia kerja. Tidak hanya sebagai ajang silaturahmi, tetapi juga langkah awal dalam menjalin kolaborasi yang dapat membuka peluang lebih luas bagi peningkatan kompetensi di masa depan.</p>
            
            <p>Sejalan dengan itu, I-WILL Lab juga mempresentasikan <strong>laporan progress dari ARC-01</strong> yang telah berlangsung selama satu bulan. Setiap tim berfokus mengembangkan proyeknya dengan penuh dedikasi mulai dari perumusan ide, pengujian, hingga pencapaian milestone awal yang menjadi fondasi penting menuju target besar berikutnya.</p>
            
            <p>Beragam produk ARC-01 turut ditampilkan perkembangannya, mulai dari <strong>Drone, Rover, Donimal, Netradump, Skysense, AngklungineX, S.A.R.A.H, Carrymate, SmartTrain Vending Machine, hingga Arcade Sniper</strong>. Setiap progress ini menjadi bukti nyata komitmen untuk terus berinovasi secara berkelanjutan.</p>
            
            <p class="mt-4">Semoga melalui kunjungan dan progress report ini, kita dapat memperkuat sinergi antara dunia pendidikan, pelatihan, dan industri, sehingga lahir generasi yang adaptif, kreatif, dan siap menghadapi tantangan zaman. Pantau terus perkembangan kami berikutnya, karena perjalanan ini masih berlanjut dan akan semakin menarik pada ARC-02 mendatang. 👀</p>
        `,
        image: "",
        category: "WORKSHOP", // Workshop as it involves progress report
        date: "2024-09-15",
        author: "I-WILL Team",
        tags: ["BLK Visit", "ARC-01", "Progress Report", "Innovation"],
        link: "#"
    },
    {
        id: "c-workshop-perdana-iwill",
        slug: "workshop-perdana-i-will-dokumentasi-efektif",
        title: "Workshop Perdana I-WILL: Seni Menciptakan Proyek Menakjubkan 🎨",
        excerpt: "Kami mengucapkan terima kasih yang tulus kepada semua peserta yang telah ikut serta dalam workshop perdana I-WILL.",
        content: `
            <p>Kami mengucapkan terima kasih yang tulus kepada semua peserta yang telah ikut serta dalam workshop perdana I-WILL. Kami mendapatkan pengalaman yang luar biasa dalam mempelajari seni menciptakan proyek-proyek yang menakjubkan, di mana kami tidak hanya menjelajahi ide-ide inovatif tetapi juga mempelajari teknik-teknik yang penting untuk menjaga keberlanjutan proyek-proyek ini melalui dokumentasi yang efektif.</p>

            <p>Selama workshop, kami berpartisipasi dalam diskusi yang menekankan pentingnya merancang proyek yang memberikan pengaruh signifikan. Para peserta memperoleh pemahaman yang penting mengenai keterampilan yang diperlukan untuk melakukan dokumentasi dengan baik, sehingga usaha mereka tidak hanya mendapatkan pengakuan, tetapi juga dapat diakses dengan mudah untuk referensi di kemudian hari.</p>

            <p>Ucapan terima kasih yang khusus diberikan kepada <strong>Muktiadi Akhmad Januar</strong> atas sesi luar biasa yang telah menginspirasi serta memotivasi kami semua. Kemampuan dan dedikasinya di bidang ini benar-benar memberikan dampak positif pada pengalaman pembelajaran kami.</p>

            <p class="font-bold mt-4">Dengan bangga, kami ingin memberitahukan bahwa ini baru awal dari perjalanan kita.</p>
            
            <p>Pantau terus workshop – workshop selanjutnya, di mana kita akan terus menyelidiki berbagai topik baru dan meningkatkan keterampilan kita bersama! Kami mengucapkan terima kasih yang sebesar-besarnya karena telah menjadi bagian dari perjalanan ini, dan kami sangat berharap untuk bertemu dengan Anda di acara-acara kami yang akan datang.</p>
        `,
        image: "", // placeholder
        category: "WORKSHOP", 
        date: "2024-09-13",
        author: "Event Organizer",
        tags: ["Workshop", "Documentation", "Skill Building", "Community"],
        link: "#"
    },
    {
        id: "c-workshop-vr-ar-sdit",
        slug: "workshop-user-needs-ar-vr-sdit-daarul-jihad",
        title: "Workshop User Needs: Mengembangkan Media Pembelajaran Berbasis AR & VR untuk SDIT Daarul Jihad",
        excerpt: "Pada 4 September 2024, tim PKM dari Itenas Bandung ... sukses mengadakan Workshop User Needs untuk SDIT Daarul Jihad.",
        content: `
            <p>Pada 4 September 2024, tim PKM dari Itenas Bandung yang lolos pendanaan DIKTI 2024 telah sukses mengadakan Workshop User Needs untuk SDIT Daarul Jihad. Tim ini terdiri dari dosen dan mahasiswa Program Studi Informatika serta Desain Komunikasi Visual.</p>

            <p>Workshop ini bertujuan untuk mendefinisikan kebutuhan dan preferensi pengguna dalam pengembangan aplikasi media pembelajaran berbasis <strong>Augmented Reality (AR)</strong> dan <strong>Virtual Reality (VR)</strong> yang dirancang khusus untuk mendukung proses belajar siswa-siswi SDIT Daarul Jihad.</p>

            <p>Dengan menggali insight langsung dari para guru dan tenaga pengajar mengenai tantangan serta harapan mereka terhadap teknologi pembelajaran interaktif, inovasi ini diharapkan mampu meningkatkan keterlibatan siswa, efektivitas penyampaian materi, serta hasil akademik secara keseluruhan.</p>

            <p class="mt-4 italic">Terima kasih kepada DIKTI atas kepercayaan dan dukungannya. Semoga pemanfaatan teknologi AR & VR ini menjadi langkah nyata dalam menciptakan pengalaman belajar yang lebih seru, imersif, dan berdampak positif bagi masa depan pendidikan Indonesia!</p>
        `,
        image: "", //  placeholder
        category: "PKM",
        date: "2024-09-04",
        author: "Tim PKM Itenas",
        tags: ["AR/VR", "Education", "Workshop", "PKM", "SDIT Daarul Jihad"],
        link: "#"
    },
    {
        id: "c-can-tho-university-visit",
        slug: "welcome-can-tho-university-internship-aug-2024",
        title: "Welcome Can Tho University to I-WILL! 🇻🇳",
        excerpt: "Kami kedatangan tamu spesial dari luar negeri! Mahasiswa dari Can Tho University, Vietnam hadir di Laboratorium I-WILL untuk mengikuti program internship.",
        content: `
            <p><strong>🌏✨ Welcome Can Tho University to I-WILL!✨🌏</strong></p>
            <p>Kami kedatangan tamu spesial dari luar negeri! 🎉 Mahasiswa dari <strong>Can Tho University, Vietnam</strong> hadir di Laboratorium I-WILL untuk mengikuti program internship selama satu minggu penuh.</p>
            <p>Dalam kesempatan ini, mereka tidak hanya sekadar melakukan observasi, tetapi juga akan terlibat langsung dalam proses pengembangan produk dan proyek inovasi yang sedang kami kerjakan. Kolaborasi lintas negara ini menjadi wadah untuk berbagi ilmu, memperluas perspektif, serta memperkuat jejaring internasional di bidang teknologi, IoT, dan robotika. 🚀🤝</p>
            <p>Kehadiran mahasiswa internasional ini adalah momen berharga yang mendorong kami untuk terus berinovasi sekaligus membuka ruang dialog akademik yang lebih luas. Dengan semangat kebersamaan, kami berharap program ini mampu melahirkan pengalaman berkesan sekaligus menghasilkan kontribusi nyata. ✨</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-08-25",
        author: "Public Relations",
        tags: ["International Internship", "Vietnam", "Can Tho University", "Collaboration"],
        link: "#"
    },
    {
        id: "c-visit-dpmptsp-paser",
        slug: "visit-dpmptsp-dinas-perikanan-paser-aug-2024",
        title: "Kunjungan DPMPTSP & Dinas Perikanan Kab. Paser, Kalimantan Timur",
        excerpt: "Kami mendapat kesempatan istimewa menerima kunjungan dari DPMPTSP serta Dinas Perikanan Kabupaten Paser, Provinsi Kalimantan Timur.",
        content: `
            <p>Kemarin, kami mendapat kesempatan istimewa menerima kunjungan dari <strong>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP)</strong> serta <strong>Dinas Perikanan Kabupaten Paser, Provinsi Kalimantan Timur</strong>.</p>
            <p>Dalam kunjungan ini, tim pemerintah daerah meninjau langsung berbagai produk dan proyek inovasi yang sedang kami kembangkan di bidang teknologi berbasis IoT dan robotika. Selain sebagai ajang silaturahmi, kegiatan ini juga menjadi ruang diskusi mengenai peluang kolaborasi dan pemanfaatan teknologi dalam pengembangan sektor industri maupun perikanan.</p>
            <p>Kehadiran mereka menjadi motivasi baru bagi kami untuk terus melahirkan karya yang relevan, aplikatif, dan bermanfaat bagi masyarakat luas. Terima kasih atas kunjungannya, semoga langkah kecil ini bisa menjadi awal sinergi besar ke depannya! 🙌</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-08-24",
        author: "Public Relations",
        tags: ["Government Visit", "Kalimantan Timur", "IoT", "Fisheries"],
        link: "#"
    },
    {
        id: "c-visit-brin-aug-2024",
        slug: "visit-brin-aug-2024",
        title: "Kunjungan Badan Riset dan Inovasi Nasional (BRIN) ke I-WILL 🇮🇩",
        excerpt: "Laboratorium I-WILL berkesempatan menerima kunjungan dari Badan Riset dan Inovasi Nasional (BRIN), lembaga pemerintah yang menaungi riset dan inovasi.",
        content: `
            <p>Kemarin, <strong>Laboratorium I-WILL</strong> berkesempatan menerima kunjungan dari <strong>Badan Riset dan Inovasi Nasional (BRIN)</strong>, lembaga pemerintah yang menaungi riset dan inovasi tingkat nasional di Indonesia.</p>
            <p>Dalam kunjungan ini, perwakilan BRIN meninjau langsung berbagai proyek teknologi dan robotika yang tengah dikembangkan oleh mahasiswa. Selain itu, berlangsung pula sesi diskusi terkait arah riset, peluang pengembangan inovasi, serta potensi kolaborasi di masa depan.</p>
            <p>Kehadiran BRIN menjadi sebuah kehormatan besar bagi kami. Tidak hanya memberikan apresiasi, tetapi juga membawa inspirasi serta dorongan untuk semakin serius dalam menghasilkan karya yang bermanfaat, solutif, dan berdaya guna bagi masyarakat.</p>
            <p class="font-bold mt-4">Semoga kunjungan ini menjadi langkah awal dari sinergi yang lebih luas antara dunia akademik dan lembaga riset nasional dalam membangun ekosistem inovasi Indonesia. 🚀🤝</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-08-23",
        author: "Public Relations",
        tags: ["BRIN", "National Research", "Visit", "Innovation"],
        link: "#"
    },
    {
        id: "c-visit-bisa-ai-stride",
        slug: "visit-bisa-ai-stride-malaysia-aug-2024",
        title: "Honoring the Visit from BISA AI and STRIDE Malaysia 🇲🇾",
        excerpt: "We are truly honored to the incredible team from BISA AI and Science & Technology Research Institute For Defense (STRIDE) Malaysia for visiting.",
        content: `
            <p>We are truly honored to the incredible team from <strong>BISA AI</strong> and <strong>Science & Technology Research Institute For Defense (STRIDE) Malaysia</strong> for taking the time to visit our IWILL Laboratory. Their presence brought not just expertise, but also a shared energy for innovation that has left us deeply inspired.</p>
            <p>From the moment they stepped into our lab, the exchange of ideas felt like a meeting of minds united by a common vision—to push the boundaries of technology and research for a brighter future. The discussions we shared were not just insightful but also filled with the kind of collaborative spirit that sparks real progress.</p>
            <p>Their perspectives, experiences, and passion have given us fresh motivation, and we are genuinely excited about the possibilities that lie ahead. This visit marks the beginning of what we believe will be a meaningful and transformative partnership. Together, we can turn bold ideas into reality and create solutions that make a difference.</p>
            <p class="font-bold mt-4">Here’s to innovation, collaboration, and breakthroughs that will shape tomorrow! 🚀</p>
            <p>Safe travels till we meet again and let’s keep the momentum going! 🤝💡</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-08-04",
        author: "Public Relations",
        tags: ["International Visit", "Malaysia", "BISA AI", "STRIDE", "Collaboration"],
        link: "#"
    },
    {
        id: "c-idtc-hmif-showcase",
        slug: "idtc-hmif-showcase-recap-aug-2024",
        title: "A Glimpse into the Future of IoT – Recap of Our Showcase! 🎉",
        excerpt: "Regardless, we had an incredible opportunity to exhibit our innovative projects at IDTC hosted by the HMIF!",
        content: `
            <p><strong>A Glimpse into the Future of IoT – Recap of Our Showcase!* 🎉</strong></p>
            <p>Yesterday, we had an incredible opportunity to exhibit our innovative projects at <strong>IDTC hosted by the HMIF</strong>! The energy was electric as we connected with brilliant minds, shared our tech passion, and witnessed the incredible innovations from other teams. It was an honor to share our passion for technology with fellow enthusiasts</p>
            
            <p>Highlights from our booth are:</p>
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Angklungine X</strong></li>
                <li><strong>Drone</strong></li>
                <li><strong>C.I.T.R.A</strong></li>
                <li><strong>S.A.R.A.H</strong></li>
                <li><strong>Bicycle VR Simulator</strong></li>
            </ul>
            
            <p class="mt-4">A huge thank you to everyone who stopped by, asked questions, and tried out our projects! The energy and feedback were truly inspiring. Stay tuned for more tech adventures! 🔥</p>
        `,
        image: "",
        category: "EXHIBITION",
        date: "2024-08-01",
        author: "I-WILL Team",
        tags: ["IDTC", "HMIF", "Exhibition", "IoT", "Innovation"],
        link: "#"
    },
    {
        id: "c-arc-01-kickoff",
        slug: "arc-01-kickoff-event-july-2024",
        title: "ARC-01 Kick-off Event: Celebrating 10 Innovative Projects 🚀",
        excerpt: "The ARC-01 Kick-off event was officially held on 23rd July 2024, marking the beginning of a journey for 10 innovative projects.",
        content: `
            <p>The <strong>ARC-01 Kick-off event</strong> was officially held on <strong>23rd July 2024</strong>, marking the beginning of a journey that will run until December 2025. This kick-off celebrates the initiation of 10 registered innovative projects by I-WILL.</p>
            <p>Here are the projects and their respective team members:</p>

            <div class="space-y-4 mt-4">
                <div>
                    <h3 class="font-bold text-lg">1. KIKO PINTAR: Sahabat Belajar Cerdas Anak Usia Dini</h3>
                    <ul class="list-disc pl-5"><li>Ikrima Nurul, Sondang Angelina</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">2. S.A.R.A.H (Search And Rescue Autonomous Hexapod)</h3>
                    <ul class="list-disc pl-5"><li>Viktorikus Nokia, Alfarabi Putra, Yuddha Wastu</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">3. Skysense</h3>
                    <ul class="list-disc pl-5"><li>Angelina G. Yudrikewati, Rida Rahmanian</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">4. Angklungine X</h3>
                    <ul class="list-disc pl-5"><li>Shandy Handika, Faruq Muhammad, Rainova Rahaniawan, Melvina Cheda, Yuddha Wastu</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">5. NetraDump (Dynamic Unwanted Matter Picker)</h3>
                    <ul class="list-disc pl-5"><li>Malendra Sahla, Muhamad Lingga, Ari Ferdiana</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">6. Machine Learning GreenWave</h3>
                    <ul class="list-disc pl-5"><li>Muhammad Rifqi, Luthfiandi Rizki, Muhammad Rizky, Nizar Abdul Malik</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">7. Drone: Autonomous Human-Detection with Web Visualization</h3>
                    <ul class="list-disc pl-5"><li>Shafira Kurnia Fasya, Muhammad Zufar, Zakhwa Aliya, Farhan Kamil, Najwa Hikmatyar, Shafira Aprillia</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">8. Arcadesniper (Sentinel: Sensor Targeting Inertial)</h3>
                    <ul class="list-disc pl-5"><li>Afin Maulana, Erlangga Dwi</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">9. Smart Train Simulator</h3>
                    <ul class="list-disc pl-5"><li>Hickham Amwala, Muhammad Fariz, Muhammad Hasby, Eka Fajar R., Dzakiyya Puteri</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">10. Vending Machine Racing Team</h3>
                    <ul class="list-disc pl-5"><li>Erlangga Dwi, Mohamad Dedrick, Faiz Fazdlih, Muhammad Zulfan, Riza Maulana</li></ul>
                </div>
                <div>
                    <h3 class="font-bold text-lg">11. R.O.V.E.R</h3>
                    <ul class="list-disc pl-5"><li>Faruq Muhammad, Matilde Ina, Asri Tanisha, Deden Roga, Dzakiyya Puteri</li></ul>
                </div>
            </div>
        `,
        image: "",
        category: "WORKSHOP", // Kick-off event for projects
        date: "2024-07-23",
        author: "I-WILL Core Team",
        tags: ["ARC-01", "Kickoff", "Innovation", "Projects"],
        link: "#"
    },
    {
        id: "c-hardiknas-2024",
        slug: "national-education-day-2024",
        title: "Throwback to National Education Day 2024 🎓✨",
        excerpt: "From May 29 to May 31, 2024, ITB hosted a series of events in celebration of National Education Day. These three inspiring days were filled with meaningful discussions...",
        content: `
            <p>From May 29 to May 31, 2024, ITB hosted a series of events in celebration of National Education Day. These three inspiring days were filled with meaningful discussions, insightful seminars, and collaborative activities designed to ignite the passion for learning, innovation, and creativity in students, educators, and all who value the power of education.</p>

            <p>A special highlight of the event was the participation of <strong>I-WILL</strong>, who showcased two of their innovative products:</p>
            <ul>
                <li><strong>Angklungine:</strong> a modern take on preserving traditional Indonesian culture through technology.</li>
                <li><strong>Delivery Dash:</strong> a fun game that integrated VR technology and bike simulator.</li>
            </ul>

            <p>As we reflect on this remarkable occasion, let’s carry forward the spirit of progress and knowledge that we fostered together.</p>
            <p>The future of education is bright, and it’s in our hands to continue building a nation that thrives on learning and innovation.</p>
            <p class="font-bold text-center mt-4">Let’s keep the momentum going! 🔥</p>
        `,
        image: "/images/1_pameran_hardiknas.jpg",
        category: "EXHIBITION",
        date: "2024-05-31",
        author: "I-WILL Laboratory",
        tags: ["Hardiknas", "Education", "Exhibition", "Angklungine", "VR"],
        link: "#"
    }
];
