import React from "react";
import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Icon,
    Text,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

const MotionBox = motion(Box);

const paragraphs = [
    "Waktu masuk kuliah, saya sama sekali tidak paham mengenai IT, padahal cita-cita saya sebenarnya menjadi dokter. Tidak terbayang akan menjadi seseorang yang ahli dalam software development dan project management. Masuk kuliah IT tanpa fundamental apa pun, namun karena kegigihan dan kemampuan beradaptasi, saya bisa tetap fokus dan akhirnya menemukan manfaat besar darinya.",
    "Saya rajin mengeksplorasi tools dan dunia pengembangan software, baik semasa kuliah maupun setelah lulus. Namun setelah menekuni dunia IT di dunia kerja selama 3 tahun, saya justru ingin mengeksplorasi domain lain seperti finansial, self-development, dan growth mindset. Saya mulai membaca buku hingga akhirnya terinspirasi untuk menulis e-book sendiri.",
    "Saya bangga bisa hidup di era teknologi yang mengalami 3 transisi nyata: dari searching Google manual, ke chat AI interaktif, hingga AI workflow orkestrasi. Transisi ini membuat saya semakin fokus memperkuat fundamental cara berpikir saya, terutama dalam architecture thinking.",
];

const STAR_FIELD = [
    { top: "8%", left: "12%", size: "2px", delay: 0 },
    { top: "14%", left: "42%", size: "3px", delay: 0.4 },
    { top: "22%", left: "68%", size: "2px", delay: 1.2 },
    { top: "34%", left: "88%", size: "2px", delay: 0.8 },
    { top: "48%", left: "20%", size: "3px", delay: 1.6 },
    { top: "58%", left: "5%", size: "2px", delay: 0.2 },
    { top: "66%", left: "60%", size: "2px", delay: 2 },
    { top: "76%", left: "35%", size: "3px", delay: 1 },
    { top: "82%", left: "80%", size: "2px", delay: 0.6 },
    { top: "12%", left: "94%", size: "2px", delay: 1.8 },
    { top: "90%", left: "50%", size: "2px", delay: 1.4 },
    { top: "40%", left: "48%", size: "2px", delay: 2.4 },
];

const METEORS = [
    { top: "10%", left: "-10%", w: "120px", duration: 1.6, repeatDelay: 6, delay: 0 },
    { top: "35%", left: "-10%", w: "90px", duration: 1.3, repeatDelay: 8, delay: 3 },
    { top: "60%", left: "-10%", w: "140px", duration: 1.8, repeatDelay: 7, delay: 5.5 },
];

function Hero() {
    return (
        <Box as="section" id="hero" position="relative" py={{ base: 16, md: 24 }} overflow="hidden">
            {/* Local star field — section backgrounds paint over the global one */}
            {STAR_FIELD.map((star, i) => (
                <MotionBox
                    key={i}
                    position="absolute"
                    top={star.top}
                    left={star.left}
                    w={star.size}
                    h={star.size}
                    borderRadius="full"
                    bg="#faf9ff"
                    zIndex={0}
                    animate={{ opacity: [0.15, 0.9, 0.15] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
                />
            ))}

            {/* Meteors */}
            {METEORS.map((m, i) => (
                <MotionBox
                    key={i}
                    position="absolute"
                    top={m.top}
                    left={m.left}
                    w={m.w}
                    h="2px"
                    borderRadius="full"
                    bgGradient="linear(90deg, rgba(250,249,255,0), rgba(250,249,255,0.9))"
                    transform="rotate(-22deg)"
                    zIndex={0}
                    display={{ base: "none", md: "block" }}
                    initial={{ opacity: 0 }}
                    animate={{ x: ["0vw", "70vw"], opacity: [0, 1, 0] }}
                    transition={{
                        duration: m.duration,
                        repeat: Infinity,
                        repeatDelay: m.repeatDelay,
                        delay: m.delay,
                        ease: "easeIn",
                    }}
                />
            ))}

            <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={{ base: 14, md: 14 }}
                    alignItems="center"
                >
                    {/* ── Left: Story ── */}
                    <GridItem order={{ base: 2, md: 1 }}>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading
                                as="h1"
                                fontFamily="'Playfair Display', Georgia, serif"
                                fontWeight="800"
                                fontStyle="italic"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                lineHeight="1.15"
                                color="#faf9ff"
                                mb={8}
                            >
                                Sepintas
                                <br />
                                <Box as="span" position="relative" display="inline-block">
                                    Fakta Tentang Saya
                                    <Box
                                        as="svg"
                                        position="absolute"
                                        left="0"
                                        bottom="-10px"
                                        width="100%"
                                        height="14px"
                                        viewBox="0 0 196 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M 4,7 C 50,1 150,1 196,7"
                                            fill="none"
                                            stroke="#cc7bc9"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                        />
                                    </Box>
                                </Box>
                            </Heading>

                            <VStack align="stretch" spacing={5}>
                                {paragraphs.map((p, i) => (
                                    <Text
                                        key={i}
                                        fontFamily="'Outfit', system-ui, sans-serif"
                                        color="#d0d0d0"
                                        fontSize={{ base: "md", md: "lg" }}
                                        lineHeight="1.85"
                                    >
                                        {p}
                                    </Text>
                                ))}
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* ── Right: Photo collage ── */}
                    <GridItem order={{ base: 1, md: 2 }}>
                        <Box
                            position="relative"
                            w="full"
                            h={{ base: "440px", md: "600px" }}
                        >
                            {/* Ambient glow halo */}
                            <MotionBox
                                position="absolute"
                                top="50%"
                                left="55%"
                                w={{ base: "300px", md: "440px" }}
                                h={{ base: "300px", md: "440px" }}
                                transform="translate(-50%, -50%)"
                                borderRadius="full"
                                bgGradient="radial(circle, rgba(204,123,201,0.4) 0%, rgba(134,107,171,0.2) 45%, rgba(41,43,55,0) 72%)"
                                filter="blur(35px)"
                                zIndex={0}
                                animate={{ scale: [1, 1.18, 1], opacity: [0.75, 1, 0.75] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Sparkle accents */}
                            {[
                                { top: "6%", left: "6%", size: "10px", color: "#cc7bc9", delay: 0 },
                                { top: "18%", right: "4%", size: "7px", color: "#bd93f9", delay: 0.6 },
                                { bottom: "22%", left: "2%", size: "8px", color: "#866bab", delay: 1.1 },
                            ].map((dot, i) => (
                                <MotionBox
                                    key={i}
                                    position="absolute"
                                    top={dot.top}
                                    left={dot.left}
                                    right={dot.right}
                                    bottom={dot.bottom}
                                    w={dot.size}
                                    h={dot.size}
                                    borderRadius="full"
                                    bg={dot.color}
                                    boxShadow={`0 0 12px ${dot.color}`}
                                    zIndex={3}
                                    display={{ base: "none", md: "block" }}
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.15, 0.8] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
                                />
                            ))}

                            {/* Main hero photo — gradient ring */}
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                position="absolute"
                                top="0"
                                right="0"
                                w={{ base: "80%", md: "82%" }}
                                h={{ base: "360px", md: "480px" }}
                                zIndex={2}
                            >
                                <MotionBox
                                    w="full"
                                    h="full"
                                    borderRadius="70% 30% 30% 70% / 60% 40% 60% 40%"
                                    p="5px"
                                    bgGradient="linear(135deg, #866bab, #cc7bc9, #bd93f9)"
                                    boxShadow="0 35px 60px -15px rgba(204, 123, 201, 0.5), 0 0 50px rgba(134, 107, 171, 0.35)"
                                    animate={{ y: [0, -16, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Box
                                        w="full"
                                        h="full"
                                        borderRadius="70% 30% 30% 70% / 60% 40% 60% 40%"
                                        overflow="hidden"
                                        bg="#383a4a"
                                    >
                                        <Box
                                            as="img"
                                            src="/images/Selfie3.png"
                                            alt="Darmawan"
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                            objectPosition="top"
                                        />
                                    </Box>
                                </MotionBox>

                                {/* Glass badge */}
                                <MotionBox
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    position="absolute"
                                    bottom={{ base: "-14px", md: "6px" }}
                                    right={{ base: "6%", md: "-8px" }}
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                    px={4}
                                    py={2}
                                    borderRadius="full"
                                    bg="rgba(56, 58, 74, 0.75)"
                                    backdropFilter="blur(12px)"
                                    border="1px solid rgba(204, 123, 201, 0.4)"
                                    boxShadow="0px 8px 24px rgba(0, 0, 0, 0.35)"
                                    zIndex={4}
                                >
                                    <Icon as={FiCode} color="#ff79c6" boxSize={4} />
                                    <Text
                                        fontFamily="'Outfit', system-ui, sans-serif"
                                        fontSize="sm"
                                        fontWeight="600"
                                        color="#faf9ff"
                                        whiteSpace="nowrap"
                                    >
                                        Software Engineer
                                    </Text>
                                </MotionBox>
                            </MotionBox>

                            {/* Accent photo — top left */}
                            <MotionBox
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                position="absolute"
                                top={{ base: "-16px", md: "-28px" }}
                                left={{ base: "0", md: "-20px" }}
                                w={{ base: "126px", md: "172px" }}
                                h={{ base: "126px", md: "172px" }}
                                zIndex={3}
                            >
                                <MotionBox
                                    w="full"
                                    h="full"
                                    borderRadius="full"
                                    p="4px"
                                    bgGradient="linear(135deg, #cc7bc9, #bd93f9)"
                                    boxShadow="0px 0px 30px rgba(204, 123, 201, 0.45)"
                                    animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Box w="full" h="full" borderRadius="full" overflow="hidden" bg="#383a4a">
                                        <Box
                                            as="img"
                                            src="/images/Selfie2.png"
                                            alt="Potret Darmawan"
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                        />
                                    </Box>
                                </MotionBox>
                            </MotionBox>

                            {/* Dot-grid texture accent, tucked behind the bottom-left photo */}
                            <Box
                                position="absolute"
                                bottom={{ base: "-30px", md: "-6px" }}
                                left={{ base: "-6%", md: "-20%" }}
                                w="150px"
                                h="150px"
                                opacity={0.35}
                                zIndex={2}
                                display={{ base: "none", md: "block" }}
                                backgroundImage="radial-gradient(rgba(134, 107, 171, 0.7) 1.4px, transparent 1.4px)"
                                backgroundSize="14px 14px"
                            />

                            {/* Accent photo — bottom left */}
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                position="absolute"
                                bottom={{ base: "-24px", md: "18px" }}
                                left={{ base: "8%", md: "-12px" }}
                                w={{ base: "118px", md: "160px" }}
                                h={{ base: "118px", md: "160px" }}
                                zIndex={3}
                            >
                                <MotionBox
                                    w="full"
                                    h="full"
                                    borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                                    p="4px"
                                    bgGradient="linear(135deg, #bd93f9, #866bab)"
                                    boxShadow="0px 0px 30px rgba(189, 147, 249, 0.4)"
                                    animate={{ y: [0, 12, 0], rotate: [0, -3, 0, 3, 0] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                >
                                    <Box
                                        w="full"
                                        h="full"
                                        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                                        overflow="hidden"
                                        bg="#383a4a"
                                    >
                                        <Box
                                            as="img"
                                            src="/images/Selfie1.png"
                                            alt="Potret Darmawan dengan kacamata"
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                            transform="scale(1.0)"
                                            transformOrigin="center 35%"
                                        />
                                    </Box>
                                </MotionBox>
                            </MotionBox>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>

            {/* Section divider */}
            <Box
                position="absolute"
                bottom="0"
                left="0"
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={1}
                px={{ base: 6, md: 0 }}
            >
                <Box h="1px" flex="1" maxW="220px" bgGradient="linear(90deg, rgba(134,107,171,0), rgba(134,107,171,0.6))" />
                <Box display="flex" alignItems="center" gap={2} mx={3}>
                    <Box w="5px" h="5px" borderRadius="full" bg="#866bab" />
                    <Box w="7px" h="7px" borderRadius="full" bg="#cc7bc9" boxShadow="0 0 10px #cc7bc9" />
                    <Box w="5px" h="5px" borderRadius="full" bg="#bd93f9" />
                </Box>
                <Box h="1px" flex="1" maxW="220px" bgGradient="linear(90deg, rgba(134,107,171,0.6), rgba(134,107,171,0))" />
            </Box>
        </Box>
    );
}

export default Hero;
