// src/lib/gtag.ts

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID!;

export const event = (name: string, params: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", name, params);
    }
};
