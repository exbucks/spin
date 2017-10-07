import _ from 'underscore';

const getLogoBySkin = {
    navbar: (skin, brand) => {
        const navbarStyleLogoMap = {
        	'dark': './logo-{brand}-white@2X.png',
        	'light': './logo-{brand}-black@2X.png',
        	'color': './logo-{brand}-white@2X.png'
        };

        if(navbarStyleLogoMap[skin]) {
            const fileName = navbarStyleLogoMap[skin]
                .replace(/\{brand\}/, brand);
            return getLogoBySkin._getData(fileName);
        }

        return null;
    },

    sidebar: (skin, type, brand) => {
        const sidebarSkinLogoMap = {
        	'dark': {
        		'slim': './logo-slim-{brand}@2X.png',
        		'big': './logo-big-{brand}-white@2X.png',
        		'overlay': './logo-{brand}-white@2X.png'
        	},
        	'light': {
        		'slim': './logo-slim-{brand}@2X.png',
        		'big': './logo-big-{brand}-black@2X.png',
        		'overlay': './logo-{brand}-black@2X.png'
        	},
        	'color': {
        		'slim': './logo-slim-{brand}@2X.png',
        		'big': './logo-big-{brand}-black@2X.png',
        		'overlay': './logo-{brand}-white@2X.png'
        	}
        };

        if(sidebarSkinLogoMap[skin] && sidebarSkinLogoMap[skin][type]) {
            const fileName = sidebarSkinLogoMap[skin][type]
                                .replace(/\{brand\}/, brand);
            return getLogoBySkin._getData(fileName);
        }
        return false;
    },

    _getData: (fileName) => {
        const logosContext = require.context("static/logos"
            , true, /^\.\/.*\.png/);

        if(_.contains(logosContext.keys(), fileName)) {
            return logosContext(fileName);
        }
        return null;
    }
}

export default getLogoBySkin;
