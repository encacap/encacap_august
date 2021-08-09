module.exports = {
    mode: "jit",
    purge: {
        content: ["./notification/*.html"],
        safelist: ["animate-slide-up", "animate-slide-down", "relative"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                "slide-up": {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-down": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
            animation: {
                "slide-up": "slide-up 0.2s linear",
                "slide-down": "slide-down 0.2s linear",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
