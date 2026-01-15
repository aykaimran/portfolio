
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

function HeroSection() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(92, 200, 198, ${Math.random() * 0.5 + 0.1})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(92, 200, 198, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="hero-section" id="home">
            <canvas
                ref={canvasRef}
                className="particles-canvas"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-greeting animated-gradient-text">Bonjour !!</span>
                        <span className="hero-name">I am <span className="animated-gradient-text">Ayka Imran</span></span>
                    </h1>
                    <div className="fullstack-badge">
                        <h2 className="animated-gradient-text">Full Stack Developer & Software Engineer</h2>
                    </div>
                    <p className="hero-description">
                        Specializing in <span className="animated-gradient-text">MERN Stack, Java, and NLP solutions</span>.
                        I build scalable web applications and intelligent systems.
                    </p>

                    <div className="hero-socials">
                        {[
                            { icon: <FaGithub />, href: "https://github.com/aykaimran", label: "GitHub" },
                            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ayka-imran", label: "LinkedIn" },
                            { icon: <FaEnvelope />, href: "mailto:aykaimran28@gmail.com", label: "Email" },
                            {
                                icon: <FaFilePdf />,
                                href: `${process.env.PUBLIC_URL}/Ayka_Imran_CV.pdf`,
                                label: "Resume"
                            }

                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                aria-label={social.label}
                                style={{
                                    animation: `floatSocialIcon 3s ease-in-out infinite ${index * 0.2}s`
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;