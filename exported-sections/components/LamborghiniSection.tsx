import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Coffee, Car } from "lucide-react";
import lamborghini from "../assets/lamborghini.png";

const LamborghiniSection = () => (
    <section className="py-24 relative overflow-hidden bg-background text-foreground">
        {/* Warm gradient overlay - uses HSL variables from globals.css */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, hsl(25 80% 20% / 0.2), hsl(30 90% 15% / 0.1), transparent)' }} />

        <div className="container mx-auto px-4 relative grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <img
                    src={lamborghini}
                    alt="Yellow Lamborghini"
                    className="w-full max-w-lg rounded-2xl drop-shadow-2xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Nice Lamborghini, right?
                </h2>
                <p className="text-lg mb-6 text-yellow-500 font-medium">Yeah… I think so too.</p>

                <div className="text-muted-foreground space-y-4 mb-8 text-sm leading-relaxed">
                    <p>
                        Most apps are built by big companies with big teams. This one is built by
                        one developer who just wanted a better hydration system.
                    </p>
                    <p>
                        And yes… one day I'd love to own a Lamborghini.
                    </p>
                    <p>
                        If you enjoy the app and want to support the project, you can help fund two
                        things:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Better features for the app</li>
                        <li>The developer's completely unrealistic dream car</li>
                    </ul>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 border bg-background">
                        <Coffee className="h-5 w-5" />
                        Buy Me a Coffee
                    </button>
                    <Button variant="lambo" size="lg" className="gap-2">
                        <Car className="h-5 w-5" />
                        Fund the Lamborghini
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground italic mb-6">
                    Don't worry — app improvements come first.
                </p>

                {/* Progress bar */}
                <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-yellow-500">Lamborghini Fund Progress</span>
                        <span className="text-muted-foreground">0.0003%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]" style={{ width: "0.1%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                        Current progress toward buying a Lamborghini. It might take a while.
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default LamborghiniSection;
