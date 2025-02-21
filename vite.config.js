export default {
    root: "src",
    build: {
        outDir:"../dist",
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            output:{
                entryFileNames: 'assets/[name].js',
                chunkFileNames:'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
            },
        },
    },
   base:"/Portfolio-Site-Vite/",
};