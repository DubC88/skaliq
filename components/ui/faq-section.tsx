"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Language, translations } from "@/lib/translations";

type FaqItem = {
  question: string;
  answer: string;
};

// Custom hook for media query
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  items?: FaqItem[];
  language: Language;
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, language, ...props }, ref) => {
    // Get translations based on selected language
    const t = translations[language];
    
    // Use provided items or get from translations
    // Handle case where faq might not exist in some languages
    const faqItems = items || (t as any).faq?.items || [];
    const faqTitle = title || (t as any).faq?.title || "Frequently Asked Questions";
    const faqDescription = description || (t as any).faq?.description || "Find answers to common questions about our services";
    
    if (!faqItems || faqItems.length === 0) return null;
    
    return (
      <section
        ref={ref}
        className={cn(
          "py-6 md:py-16 w-full bg-transparent px-2 md:px-8",
          className
        )}
        {...props}
      >
        <div className="container px-0 md:px-4 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-4 md:mb-12"
          >
            <h2 className="text-xl md:text-3xl font-semibold mb-1 md:mb-3 text-white">
              {faqTitle}
            </h2>
            {faqDescription && (
              <p className="text-xs md:text-base text-gray-300 px-2">{faqDescription}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-2xl mx-auto px-1 md:px-0">
            {faqItems.map((item: FaqItem, index: number) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-[#ffffff10]",
        "mb-3",
        isOpen
          ? "bg-[#0A0A18] bg-opacity-50"
          : "hover:bg-[#0A0A18] hover:bg-opacity-30"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 md:px-6 py-3 md:py-5 min-h-[44px] h-auto justify-between hover:bg-transparent"
      >
        <h3
          className={cn(
            "text-xs md:text-base font-medium transition-colors duration-200 text-left",
            "text-gray-300",
            isOpen && "text-white",
            "flex-1 pr-2 py-1 truncate"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0 mr-1",
            "transition-colors duration-200",
            isOpen ? "text-[#9F6BFF]" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-3 md:px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-[10px] md:text-sm text-gray-400 leading-relaxed pr-1"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
