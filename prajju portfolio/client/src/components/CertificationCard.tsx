import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Eye, Award } from "lucide-react";
import { motion } from "framer-motion";

interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    description: string;
    imageUrl: string;
    index: number;
}

export function CertificationCard({ title, issuer, date, description, imageUrl, index }: CertificationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
        >
            {/* Thumbnail / Image Section */}
            <Dialog>
                <DialogTrigger asChild>
                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg group/image bg-muted">
                        {/* Use a real image or fallback if valid url is passed, otherwise a placeholder div */}
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <Eye className="text-white w-8 h-8" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                    <DialogHeader className="sr-only">
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full h-full min-h-[50vh] bg-black/90 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src={imageUrl} alt={title} className="max-w-full max-h-[85vh] object-contain" />
                    </div>
                </DialogContent>
            </Dialog>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                    <Award size={16} />
                    {issuer}
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{date}</span>
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
