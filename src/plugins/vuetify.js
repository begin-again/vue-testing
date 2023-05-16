import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    customVariables: ['~/assets/variables.scss'],
    theme: {
        dark: true,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: colors.shades.black, // '#009eda',
                background: colors.shades.white,
                foreground: '#1e1e1e', // colors.shades.black,
                secondary: colors.shades.white,
                brand: '#009eda',
                brandContrast: colors.shades.white,
                accent: '#eeeeee', // colors.shades.black
                accentForeground: '#aaaaaa'
            },
            dark: {
                primary: colors.shades.white,
                background: '#1e1e1e', //colors.shades.black,
                foreground: colors.shades.white,
                secondary: '#1e1e1e', //colors.shades.black,
                brand: '#00355c',
                brandContrast: colors.shades.white,
                accent: '#424242',
                accentForeground: '#868686'
            }
        },
    },
    icons: {
        // iconfont: 'mdi' // default
        iconfont: 'md'
    },
    treeShake: true
});
