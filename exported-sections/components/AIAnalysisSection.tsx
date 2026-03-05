import { motion } from "framer-motion";
import { Camera, ArrowRight, Zap } from "lucide-react";
import aiAnalysis from "../assets/ai-analysis.png";

const AIAnalysisSection = () => (
    <section className="py-24 relative overflow-hidden bg-background text-foreground">
        {/* Decorative glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Know What You're Eating{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">In Seconds.</span>
                </h2>

                <div className="flex items-center gap-4 mb-8 flex-wrap">
                    {["Take Photo", "AI Analysis", "Calories / Protein / Carbs"].map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm">
                                {step}
                            </div>
                            {i < 2 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
                        </div>
                    ))}
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-500/10">
                            <Camera className="h-4 w-4 text-blue-500" />
                        </div>
                        <span>Free users get limited AI scans.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-purple-500/10">
                            <Zap className="h-4 w-4 text-purple-500" />
                        </div>
                        <span>Pro users get more scans.</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <div className="relative">
                    {/* Subtle background glow for the image */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px]" />
                    <img
                        src={aiAnalysis}
                        alt="AI food analysis showing nutritional breakdown"
                        className="relative w-56 md:w-72 drop-shadow-2xl rounded-3xl border border-white/5"
                    />
                </div>
            </motion.div>
        </div>
    </section>
);

export default AIAnalysisSection;
