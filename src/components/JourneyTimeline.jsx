import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";

const MotionBox = motion(Box);

const TIMELINE_THEME = {
    primary: "#866bab",
    secondary: "#bd93f9",
    cardBgColor: "#383a4a",
    cardForeColor: "#d0d0d0",
    cardDetailsBackGround: "#383a4a",
    cardDetailsColor: "#d0d0d0",
    cardSubtitleColor: "#866bab",
    cardTitleColor: "#faf9ff",
    cardMediaBgColor: "#292b37",
    detailsColor: "#d0d0d0",
    titleColor: "#faf9ff",
    titleColorActive: "#1e1f2b",
    iconBackgroundColor: "#292b37",
    toolbarBgColor: "#292b37",
    toolbarBtnBgColor: "#383a4a",
    toolbarTextColor: "#faf9ff",
};

const ITEMS = [
    {
        title: "Nov 2025 - Sekarang",
        cardTitle: "Project Lead",
        cardSubtitle: "PT. Samamaju Prima · Kontrak · Makassar (On-site)",
        cardDetailedText: [
            "Seiring waktu, saya dipercaya menjadi Project Lead. Fokus saya bergeser dari implementasi teknis ke pengelolaan tim, dengan tanggung jawab menghilangkan hambatan development, meningkatkan velocity, dan memastikan setiap pekerjaan menghasilkan real business value.",
            "Dalam peran ini, saya menerapkan pendekatan Agile dan Scrum untuk menjaga alur kerja tim tetap efektif dan adaptif. Pengalaman ini memberi saya pemahaman bahwa membangun produk bukan hanya soal teknologi, tetapi juga tentang mengelola proses, orang, dan prioritas dengan baik.",
            "Fase ini menjadi salah satu yang paling penting dalam perjalanan saya, karena dari sini saya mulai melihat gambaran yang lebih besar tentang bagaimana sistem dapat mendukung keputusan bisnis dan menciptakan dampak berkelanjutan. Pengalaman tersebut juga mendorong saya untuk mulai merancang Personal Developer Notebook sebagai sarana mendokumentasikan proses berpikir, pengalaman teknis, dan pembelajaran saya sebagai developer.",
        ],
    },
    {
        title: "Nov 2023 - Nov 2025",
        cardTitle: "Programmer",
        cardSubtitle: "PT. Samamaju Prima · Kontrak · Makassar (On-site)",
        cardDetailedText: [
            "Perjalanan profesional saya berkembang lebih jauh saat bergabung dengan PT. Samamaju Prima, di mana saya bertransisi dari programmer menjadi Project Lead.",
            "Saya memulai sebagai programmer dengan tanggung jawab membangun dan memelihara aplikasi web internal perusahaan menggunakan framework internal. Peran ini menuntut saya untuk cepat beradaptasi dan memastikan setiap sistem yang dibuat benar-benar mendukung kebutuhan bisnis.",
        ],
    },
    {
        title: "Mar 2023 - Des 2023",
        cardTitle: "Frontend Web Developer",
        cardSubtitle: "Nocode Magician · Kontrak · Remote (Jakarta Selatan)",
        cardDetailedText: [
            "Seiring dengan berkembangnya pengalaman saya, saya kemudian mengambil peran sebagai Frontend Web Developer dalam sebuah kontrak profesional bersama Nocode Magician. Pada fase ini, saya mulai berhadapan langsung dengan kebutuhan bisnis yang lebih kompleks dan menuntut solusi yang tidak hanya bekerja, tetapi juga andal dan siap digunakan oleh pengguna secara luas.",
            "Saya membangun berbagai aplikasi web menggunakan React.js, khususnya yang berkaitan dengan integrasi sistem pembayaran. Di sini, saya belajar bagaimana memastikan setiap alur transaksi berjalan dengan aman dan mulus, serta bagaimana mengelola state aplikasi yang cukup kompleks. Selain itu, saya juga mengimplementasikan sistem autentikasi berbasis login dan validasi OTP, yang menjadi fondasi penting dalam menjaga keamanan akses pengguna.",
            "Tidak hanya berhenti di sana, saya juga mengembangkan dashboard web yang berfungsi sebagai pusat visualisasi data. Dashboard ini dirancang untuk membantu pengguna memahami data secara lebih intuitif melalui representasi visual yang terstruktur. Tantangannya bukan hanya pada tampilan, tetapi bagaimana menyajikan data yang kompleks menjadi sesuatu yang mudah dipahami dan actionable.",
            "Di sisi lain, saya juga terlibat dalam pengembangan aplikasi berbasis WordPress dengan kebutuhan yang cukup kompleks, menggunakan Oxygen Builder. Pengalaman ini memperluas cara pandang saya dalam membangun solusi, bahwa tidak semua harus dibangun dari nol, tetapi bagaimana memanfaatkan tools yang ada untuk menghasilkan solusi yang efisien tanpa mengorbankan kualitas.",
            "Peran ini menjadi titik penting dalam perjalanan saya sebagai engineer, di mana saya tidak hanya membangun fitur, tetapi juga mulai memahami bagaimana teknologi berperan langsung dalam mendukung operasional dan pertumbuhan bisnis.",
        ],
    },
    {
        title: "Aug 2022 - Dec 2022",
        cardTitle: "CMS Dashboard Developer",
        cardSubtitle: "YAMALI TB · React.js, MySQL & PHP",
        cardDetailedText: [
            "Perjalanan saya kemudian berlanjut ke pengembangan sistem yang lebih dekat dengan kebutuhan nyata pengguna, melalui pembangunan Content Management System (CMS) Dashboard untuk platform YAMALI TB. Dalam proyek ini, saya berfokus pada pengembangan interface menggunakan React.js, dengan tujuan menciptakan pengalaman pengelolaan konten yang efisien dan mudah digunakan.",
            "Dashboard ini dirancang untuk memungkinkan tim dalam mengelola berbagai konten website secara dinamis, mulai dari menambahkan, mengubah, hingga menghapus konten. Selain itu, sistem ini juga mendukung pengelolaan data kasus penyakit Tuberkulosis yang digunakan sebagai dasar visualisasi pada website YAMALI TB.",
            "Dalam proses pengembangannya, saya tidak hanya berfokus pada tampilan, tetapi juga memahami bagaimana data mengalir di balik layar. Saya berkolaborasi dengan sistem backend yang menggunakan MySQL dan PHP, memastikan bahwa data dapat dikelola dengan baik, terstruktur, dan siap digunakan untuk kebutuhan representasi data yang akurat.",
            "Proyek ini memberikan perspektif baru bagi saya tentang pentingnya membangun sistem yang tidak hanya fungsional, tetapi juga usable. Saya belajar bahwa interface yang baik bukan hanya tentang estetika, tetapi tentang bagaimana mempermudah pengguna dalam mengelola informasi yang kompleks menjadi sesuatu yang lebih terstruktur dan bermakna.",
            "Melalui pengalaman ini, saya semakin memahami bahwa peran seorang engineer bukan hanya membangun sistem, tetapi juga menciptakan jembatan antara data, teknologi, dan manusia yang menggunakannya.",
        ],
        media: {
            type: "IMAGE",
            source: { url: `${import.meta.env.BASE_URL}images/timeline/yamalitb-certificate.jpg` },
        },
    },
    {
        title: "2022 · Hackathon",
        cardTitle: "Backend Engineer · Tim Hackathon",
        cardSubtitle: "ECOREEN · Aplikasi Manajemen Jejak Karbon",
        cardDetailedText: [
            "Setelah menyelesaikan perjalanan di Bangkit, saya melanjutkan eksplorasi saya melalui sebuah pengalaman kolaboratif dalam sebuah hackathon bersama dua teman saya untuk mengembangkan prototype aplikasi bernama ECOREEN. Aplikasi ini dirancang dengan tujuan sederhana namun berdampak besar: membantu mengelola jejak karbon untuk menciptakan ekosistem yang lebih baik.",
            "Dalam hackathon ini, saya mengambil peran sebagai backend engineer, di mana saya bertanggung jawab untuk membangun fondasi sistem yang mendukung seluruh alur aplikasi. Dengan memanfaatkan ECOLOOP API yang disediakan dalam kompetisi ini, saya mengintegrasikan berbagai layanan untuk memastikan data dapat diproses, disimpan, dan digunakan secara efisien.",
            "Bekerja bersama dua teman saya dalam proyek ini memberikan pengalaman yang berbeda dan sangat berkesan. Tidak hanya soal membangun sistem, tetapi juga bagaimana berkolaborasi dalam tim kecil untuk menerjemahkan ide menjadi sebuah produk yang dapat digunakan dalam waktu yang terbatas. Saya belajar bagaimana menyelaraskan kebutuhan antar anggota tim, menjaga performa sistem, serta memastikan setiap komponen dapat berjalan secara terintegrasi.",
            "Melalui ECOREEN, saya semakin memahami bahwa teknologi dapat menjadi alat untuk menciptakan dampak yang lebih luas, tidak hanya bagi pengguna, tetapi juga bagi lingkungan. Pengalaman hackathon ini menjadi salah satu momen penting yang memperkuat perspektif saya sebagai engineer: bahwa solusi yang baik bukan hanya yang berjalan dengan baik, tetapi juga yang memiliki tujuan yang berarti.",
        ],
        media: {
            type: "IMAGE",
            source: { url: `${import.meta.env.BASE_URL}images/timeline/ecoreen-certificate.jpg` },
        },
    },
    {
        title: "Feb 2022 - Jul 2022",
        cardTitle: "Machine Learning Path Cohort",
        cardSubtitle: "Bangkit Academy oleh Google, Tokopedia, Gojek & Traveloka · Remote",
        cardDetailedText: [
            "Perjalanan saya di dunia Machine Learning dimulai ketika saya bergabung dalam Bangkit Academy - Machine Learning Path, sebuah program intensif yang dipimpin oleh Google, Tokopedia, Gojek, dan Traveloka. Selama enam bulan, dari Februari hingga Juli 2022, saya tidak hanya belajar tentang teknologi, tetapi juga belajar bagaimana cara berpikir dalam menyelesaikan masalah nyata menggunakan data.",
            "Di awal, semuanya terasa kompleks, mulai dari memahami Python untuk automasi, mendalami analisis data, hingga mencoba mengerti konsep matematika di balik algoritma Machine Learning. Namun, seiring berjalannya waktu, setiap bagian mulai terhubung. Saya mulai melihat bagaimana data dapat diolah menjadi insight, dan bagaimana model dapat dilatih untuk memahami pola yang sebelumnya tidak terlihat.",
            "Saya kemudian mendalami berbagai spesialisasi, termasuk Machine Learning, TensorFlow, hingga bagaimana sebuah model tidak hanya dibuat, tetapi juga bisa di-deploy dan digunakan secara nyata. Di titik ini, saya mulai menyadari bahwa Machine Learning bukan hanya soal model, tetapi tentang bagaimana menciptakan solusi end-to-end yang benar-benar bisa digunakan.",
            "Semua pembelajaran tersebut mencapai puncaknya ketika saya mengerjakan Capstone Project: sebuah sistem Sentiment Analysis. Proyek ini saya bangun sebagai bentuk implementasi nyata dari semua hal yang telah saya pelajari. Saya mengolah data teks, melakukan preprocessing, melatih model, hingga mengevaluasi performanya untuk dapat mengklasifikasikan opini menjadi positif, negatif, atau netral.",
            "Namun, lebih dari sekadar hasil akhirnya, proyek ini mengubah cara saya melihat teknologi. Saya belajar bahwa membangun solusi bukan hanya tentang coding, tetapi tentang memahami masalah, mengolah ketidakpastian dalam data, dan menghasilkan sesuatu yang benar-benar memiliki makna.",
            "Perjalanan ini bukan hanya tentang belajar Machine Learning, tetapi tentang membentuk pola pikir baru, bagaimana saya sebagai seorang engineer bisa menciptakan dampak melalui teknologi.",
        ],
        media: {
            type: "IMAGE",
            source: { url: `${import.meta.env.BASE_URL}images/timeline/bangkit-certificate.jpg` },
        },
    },
];

function JourneyTimeline() {
    return (
        <Box as="section" id="perjalanan" py={{ base: 20, md: 28 }}>
            <Container maxW="7xl" px={{ base: 4, md: 6 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={{ base: 12, md: 16 }}
                >
                    <Heading
                        as="h2"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontWeight="800"
                        fontStyle="italic"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        color="#faf9ff"
                        mb={4}
                    >
                        Seputar Jejak
                        <br />
                        <Box as="span" position="relative" display="inline-block">
                            Perjalanan Saya
                            <Box
                                as="svg"
                                position="absolute"
                                left="0"
                                bottom="-10px"
                                width="100%"
                                height="14px"
                                viewBox="0 0 220 14"
                                fill="none"
                            >
                                <path
                                    d="M 4,7 C 60,1 170,1 216,7"
                                    fill="none"
                                    stroke="#cc7bc9"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                />
                            </Box>
                        </Box>
                    </Heading>
                    <Text
                        fontFamily="'Outfit', system-ui, sans-serif"
                        color="#c0c0c0"
                        fontSize={{ base: "md", md: "lg" }}
                        maxW="2xl"
                        mx="auto"
                        mt={6}
                    >
                        Dari peran engineering hingga hackathon dan program akademi,
                        berikut titik-titik penting yang membentuk cara saya bekerja hari
                        ini.
                    </Text>
                </MotionBox>

                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="journey-chrono"
                >
                    <Chrono
                        items={ITEMS}
                        mode="VERTICAL"
                        theme={TIMELINE_THEME}
                        cardHeight={200}
                        contentDetailsHeight={700}
                        mediaHeight={260}
                        scrollable={false}
                        disableToolbar
                        highlightCardsOnHover
                        useReadMore={false}
                        mediaSettings={{ imageFit: "contain" }}
                        fontSizes={{
                            cardSubtitle: "0.85rem",
                            cardText: "0.95rem",
                            cardTitle: "1.15rem",
                            title: "1rem",
                        }}
                    />
                </MotionBox>
            </Container>
        </Box>
    );
}

export default JourneyTimeline;
