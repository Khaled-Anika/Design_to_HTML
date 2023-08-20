export default {
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      base: '/DesignToHTML',
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/styles/main.scss";`, 
          },
        },
      },
    },
    // plugins: [
    //     {
    //       name: 'scss',
    //       setup(build) {
    //         build.onLoad({ filter: /\.scss$/ }, async (args) => {
    //           const result = sass.renderSync({
    //             file: 'src/styles/mains.scss', 
    //             sourceMap: true, 
    //           });
    
    //           return {
    //             contents: result.css.toString(),
    //             map: result.map.toString(),
    //           };
    //         });
    //       },
    //     },
    //   ],
  }
  