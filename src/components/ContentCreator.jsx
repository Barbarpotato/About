import React from "react";
import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Icon,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBookOpen, FiMessageCircle, FiCompass, FiArrowUpRight } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const MotionBox = motion(Box);

const TIKTOK_URL = "https://www.tiktok.com/@darma.devforeverybody";
const TIKTOK_HANDLE = "@darma.devforeverybody";

const PILLARS = [
    {
        icon: FiBookOpen,
        title: "Edukasi",
        description:
            "Memecah konsep software development, karier, dan cara berpikir engineer menjadi konten yang ringan dicerna, tanpa kehilangan esensinya.",
        color: "#866bab",
    },
    {
        icon: FiMessageCircle,
        title: "Pertanyaan",
        description:
            "Menjawab pertanyaan seputar dunia IT, transisi karier, dan hal-hal yang sering ditanyakan teman-teman yang baru memulai.",
        color: "#cc7bc9",
    },
    {
        icon: FiCompass,
        title: "Insight",
        description:
            "Membagikan refleksi pribadi dari perjalanan saya: pola pikir, kebiasaan, dan pelajaran yang tidak selalu ada di dokumentasi teknis.",
        color: "#bd93f9",
    },
];

function ContentCreator() {
    return (
        <Box as="section" id="konten" position="relative" py={{ base: 20, md: 28 }} overflow="hidden">
            {/* Ambient glow accents */}
            <MotionBox
                position="absolute"
                top="-10%"
                left="-8%"
                w={{ base: "260px", md: "420px" }}
                h={{ base: "260px", md: "420px" }}
                borderRadius="full"
                bgGradient="radial(circle, rgba(204,123,201,0.16) 0%, rgba(41,43,55,0) 70%)"
                filter="blur(40px)"
                zIndex={0}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <MotionBox
                position="absolute"
                bottom="-15%"
                right="-8%"
                w={{ base: "260px", md: "460px" }}
                h={{ base: "260px", md: "460px" }}
                borderRadius="full"
                bgGradient="radial(circle, rgba(134,107,171,0.16) 0%, rgba(41,43,55,0) 70%)"
                filter="blur(40px)"
                zIndex={0}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={{ base: 14, md: 20 }}
                >
                    <Text
                        fontFamily="'Outfit', system-ui, sans-serif"
                        fontSize="xs"
                        fontWeight="700"
                        letterSpacing="0.25em"
                        textTransform="uppercase"
                        color="#cc7bc9"
                        mb={4}
                    >
                        Content Creator
                    </Text>
                    <Heading
                        as="h2"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontWeight="800"
                        fontStyle="italic"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        color="#faf9ff"
                        mb={4}
                    >
                        Berbagi di Luar
                        <br />
                        <Box as="span" position="relative" display="inline-block">
                            Baris Kode
                            <Box
                                as="svg"
                                position="absolute"
                                left="0"
                                bottom="-10px"
                                width="100%"
                                height="14px"
                                viewBox="0 0 210 14"
                                fill="none"
                            >
                                <path
                                    d="M 4,7 C 55,1 160,1 206,7"
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
                        Di TikTok, saya membagikan hal-hal yang tidak selalu masuk ke dalam
                        commit message: edukasi ringan, jawaban atas pertanyaan yang sering
                        muncul, hingga insight pribadi dari perjalanan saya sebagai engineer.
                    </Text>
                </MotionBox>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={{ base: 8, md: 8 }}
                    mb={{ base: 14, md: 20 }}
                >
                    {PILLARS.map((pillar, index) => (
                        <MotionBox
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
                            position="relative"
                            bg="rgba(56, 58, 74, 0.45)"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(134, 107, 171, 0.22)"
                            borderRadius="20px"
                            p={{ base: 7, md: 8 }}
                            h="full"
                            _hover={{
                                borderColor: pillar.color,
                                transform: "translateY(-6px)",
                                boxShadow: `0px 20px 40px -12px ${pillar.color}40`,
                            }}
                            transition="all 0.35s ease"
                        >
                            <Box
                                w="56px"
                                h="56px"
                                borderRadius="16px"
                                bg="rgba(41, 43, 55, 0.8)"
                                border="1px solid"
                                borderColor={`${pillar.color}55`}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mb={5}
                                boxShadow={`0px 0px 20px ${pillar.color}30`}
                            >
                                <Icon as={pillar.icon} boxSize={6} color={pillar.color} />
                            </Box>
                            <Heading
                                as="h3"
                                fontFamily="'Playfair Display', Georgia, serif"
                                fontWeight="700"
                                fontSize="xl"
                                color="#faf9ff"
                                mb={2}
                            >
                                {pillar.title}
                            </Heading>
                            <Text
                                fontFamily="'Outfit', system-ui, sans-serif"
                                fontSize="sm"
                                color="#c0c0c0"
                                lineHeight="1.8"
                            >
                                {pillar.description}
                            </Text>
                        </MotionBox>
                    ))}
                </Grid>

                {/* ── Premium TikTok CTA panel ── */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    position="relative"
                    borderRadius="28px"
                    p="1.5px"
                    bgGradient="linear(120deg, rgba(134,107,171,0.7), rgba(204,123,201,0.7), rgba(189,147,249,0.7))"
                    boxShadow="0 30px 60px -20px rgba(204, 123, 201, 0.35)"
                >
                    <Grid
                        templateColumns={{ base: "1fr", md: "auto 1fr auto" }}
                        alignItems="center"
                        gap={{ base: 7, md: 10 }}
                        bg="rgba(30, 31, 43, 0.92)"
                        backdropFilter="blur(16px)"
                        borderRadius="26.5px"
                        px={{ base: 7, md: 12 }}
                        py={{ base: 9, md: 12 }}
                    >
                        <GridItem>
                            <MotionBox
                                w={{ base: "72px", md: "84px" }}
                                h={{ base: "72px", md: "84px" }}
                                mx={{ base: "auto", md: "0" }}
                                borderRadius="full"
                                bg="rgba(41, 43, 55, 0.9)"
                                border="1px solid rgba(204, 123, 201, 0.4)"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexShrink={0}
                                animate={{
                                    boxShadow: [
                                        "0px 0px 14px rgba(204, 123, 201, 0.3)",
                                        "0px 0px 34px rgba(204, 123, 201, 0.7)",
                                        "0px 0px 14px rgba(204, 123, 201, 0.3)",
                                    ],
                                }}
                                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Icon as={FaTiktok} boxSize={{ base: 7, md: 8 }} color="#faf9ff" />
                            </MotionBox>
                        </GridItem>

                        <GridItem textAlign={{ base: "center", md: "left" }}>
                            <VStack align={{ base: "center", md: "flex-start" }} spacing={2}>
                                <Text
                                    fontFamily="'Outfit', system-ui, sans-serif"
                                    fontSize="xs"
                                    fontWeight="700"
                                    letterSpacing="0.2em"
                                    textTransform="uppercase"
                                    color="#cc7bc9"
                                >
                                    Ikuti Perjalanannya
                                </Text>
                                <Heading
                                    as="h3"
                                    fontFamily="'Playfair Display', Georgia, serif"
                                    fontWeight="700"
                                    fontStyle="italic"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    color="#faf9ff"
                                >
                                    {TIKTOK_HANDLE}
                                </Heading>
                                <Text
                                    fontFamily="'Outfit', system-ui, sans-serif"
                                    fontSize="sm"
                                    color="#c0c0c0"
                                    maxW="360px"
                                >
                                    Konten baru rutin diunggah — dari edukasi teknis, sesi tanya
                                    jawab, sampai insight seputar karier dan mindset.
                                </Text>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <Link
                                href={TIKTOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                                mx={{ base: "auto", md: "0" }}
                                w={{ base: "full", md: "auto" }}
                                px={7}
                                py={3.5}
                                borderRadius="full"
                                fontFamily="'Outfit', system-ui, sans-serif"
                                fontWeight="600"
                                fontSize="sm"
                                whiteSpace="nowrap"
                                color="#1e1f2b"
                                bgGradient="linear(120deg, #cc7bc9, #bd93f9)"
                                boxShadow="0px 10px 24px -6px rgba(204, 123, 201, 0.55)"
                                _hover={{
                                    boxShadow: "0px 14px 30px -6px rgba(204, 123, 201, 0.75)",
                                    transform: "translateY(-2px)",
                                }}
                                transition="all 0.25s ease"
                            >
                                Kunjungi TikTok
                                <FiArrowUpRight size={16} />
                            </Link>
                        </GridItem>
                    </Grid>
                </MotionBox>
            </Container>
        </Box>
    );
}

export default ContentCreator;
