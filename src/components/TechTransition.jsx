import React from "react";
import { Box, Container, Heading, Text, Grid, VStack, Icon } from "@chakra-ui/react";
import { FiSearch, FiMessageCircle, FiGitMerge, FiHelpCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const STAGES = [
    {
        icon: FiSearch,
        era: "Era 1",
        title: "Pencarian Manual",
        description:
            "Semasa masih kuliah, saya terbiasa menyusuri forum dan dokumentasi satu per satu untuk merakit sendiri jawaban dari serpihan informasi yang tersebar. Proses yang serba manual ini justru mengajarkan saya fundamental berpikir yang kuat, sebab saat itu belum ada banyak pintasan.",
        color: "#866bab",
    },
    {
        icon: FiMessageCircle,
        era: "Era 2",
        title: "Generative AI",
        description:
            "Fundamental yang sudah terbentuk semakin kuat ketika generative AI hadir. Kehadirannya mem-boost proses belajar saya, mengubah riset yang dulu berjam-jam menjadi percakapan singkat yang kontekstual dan instan.",
        color: "#cc7bc9",
    },
    {
        icon: FiGitMerge,
        era: "Era 3",
        title: "Agentic AI",
        description:
            "Kini saya merancang alur kerja otonom lewat agentic AI, tempat banyak agent berkolaborasi menyelesaikan tugas kompleks secara end-to-end. Proses ini melatih saya semakin kuat dalam architecture thinking.",
        color: "#bd93f9",
    },
];

function TechTransition() {
    return (
        <Box as="section" id="transisi" position="relative" py={{ base: 20, md: 28 }} overflow="hidden">
            <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={{ base: 16, md: 20 }}
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
                        Melintasi 3 Transisi Teknologi
                        <br />
                        <Box as="span" position="relative" display="inline-block">
                            adalah Sebuah Keberuntungan
                            <Box
                                as="svg"
                                position="absolute"
                                left="0"
                                bottom="-10px"
                                width="100%"
                                height="14px"
                                viewBox="0 0 260 14"
                                fill="none"
                            >
                                <path
                                    d="M 4,7 C 70,1 200,1 256,7"
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
                        Saya bangga hidup di zaman yang mengalami tiga transisi nyata dalam
                        dunia teknologi. Masing-masing mengubah cara saya belajar dan
                        berpikir sebagai engineer.
                    </Text>
                </MotionBox>

                {/* ── Timeline row ── */}
                <Box position="relative">
                    {/* Connector line — desktop */}
                    <Box
                        as="svg"
                        position="absolute"
                        top={{ md: "56px" }}
                        left="0"
                        width="100%"
                        height="4px"
                        viewBox="0 0 1000 4"
                        preserveAspectRatio="none"
                        display={{ base: "none", md: "block" }}
                        zIndex={0}
                    >
                        <motion.path
                            d="M 0,2 L 1000,2"
                            fill="none"
                            stroke="#866bab"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.4, ease: "easeInOut" }}
                        />
                    </Box>

                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                        gap={{ base: 10, md: 6 }}
                        position="relative"
                        zIndex={1}
                    >
                        {STAGES.map((stage, index) => (
                            <MotionBox
                                key={stage.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                            >
                                <VStack spacing={5}>
                                    <Box
                                        w="112px"
                                        h="112px"
                                        borderRadius="full"
                                        bg="#383a4a"
                                        border="3px solid"
                                        borderColor={stage.color}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        boxShadow={`0px 0px 20px ${stage.color}55`}
                                        flexShrink={0}
                                    >
                                        <Icon as={stage.icon} boxSize={9} color={stage.color} />
                                    </Box>

                                    <VStack spacing={2} textAlign="center">
                                        <Text
                                            fontFamily="'Outfit', system-ui, sans-serif"
                                            fontSize="xs"
                                            fontWeight="700"
                                            letterSpacing="0.2em"
                                            textTransform="uppercase"
                                            color={stage.color}
                                        >
                                            {stage.era}
                                        </Text>
                                        <Heading
                                            as="h3"
                                            fontFamily="'Playfair Display', Georgia, serif"
                                            fontWeight="700"
                                            fontSize="xl"
                                            color="#faf9ff"
                                        >
                                            {stage.title}
                                        </Heading>
                                        <Text
                                            fontFamily="'Outfit', system-ui, sans-serif"
                                            fontSize="sm"
                                            color="#c0c0c0"
                                            lineHeight="1.75"
                                            maxW="240px"
                                        >
                                            {stage.description}
                                        </Text>
                                    </VStack>
                                </VStack>
                            </MotionBox>
                        ))}

                        {/* ── What's Next — pulsing teaser node ── */}
                        <MotionBox
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                        >
                            <VStack spacing={5}>
                                <MotionBox
                                    w="112px"
                                    h="112px"
                                    borderRadius="full"
                                    bg="#292b37"
                                    border="3px dashed #cc7bc9"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                    animate={{
                                        boxShadow: [
                                            "0px 0px 12px rgba(204, 123, 201, 0.35)",
                                            "0px 0px 32px rgba(204, 123, 201, 0.75)",
                                            "0px 0px 12px rgba(204, 123, 201, 0.35)",
                                        ],
                                        scale: [1, 1.06, 1],
                                    }}
                                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Icon as={FiHelpCircle} boxSize={10} color="#cc7bc9" />
                                </MotionBox>

                                <VStack spacing={2} textAlign="center">
                                    <Text
                                        fontFamily="'Outfit', system-ui, sans-serif"
                                        fontSize="xs"
                                        fontWeight="700"
                                        letterSpacing="0.2em"
                                        textTransform="uppercase"
                                        color="#cc7bc9"
                                    >
                                        Era 4
                                    </Text>
                                    <Heading
                                        as="h3"
                                        fontFamily="'Playfair Display', Georgia, serif"
                                        fontWeight="800"
                                        fontStyle="italic"
                                        fontSize="2xl"
                                        color="#faf9ff"
                                    >
                                        What's Next???
                                    </Heading>
                                    <Text
                                        fontFamily="'Outfit', system-ui, sans-serif"
                                        fontSize="sm"
                                        color="#c0c0c0"
                                        lineHeight="1.75"
                                        maxW="240px"
                                    >
                                        Transisi berikutnya masih ditulis, dan saya berada di
                                        garis depan untuk mencari tahu jawabannya.
                                    </Text>
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default TechTransition;
