import reactCss from 'reactcss';
import { Colors } from 'consts';

const style = reactCss({
    'default': {
        graphic: {
            height: '580px',
            position: 'relative',
        },
        cover: {
            absolute: '0 0 0 0',
            backgroundColor: Colors.brandPrimary,
            transition: '100ms linear background-color',
            opacity: '0.5',
        },
        logo: {
            paddingTop: '40px',
        },
        square: {
            width: '24px',
            height: '24px',
            background: 'url("images/react-color.svg")',
        },
        title: {
            paddingTop: '70px',
            fontSize: '52px',
            color: 'rgba(0,0,0,0.65)',
        },
        subtitle: {
            fontSize: '20px',
            lineHeight: '27px',
            color: 'rgba(0,0,0,0.4)',
            paddingTop: '15px',
            fontWeight: '300',
            maxWidth: '320px',
        },
        star: {
            paddingTop: '25px',
            paddingBottom: '20px',
        },

        chrome: {
            paddingTop: '50px',
            position: 'relative',
        },
        sketch: {
            position: 'relative',
        },
        photoshop: {
            position: 'relative',
        },
        compact: {
            position: 'relative',
        },
        material: {
            position: 'relative',
        },
        swatches: {
            position: 'relative',
        },
        over: {
            position: 'absolute',
            width: '100%',
            marginTop: '40px',
        },

        under: {
            paddingTop: '133px',
        },

        slider: {
            paddingTop: '10px',
            position: 'relative',
        },

        split: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'absolute',
            bottom: '0px',
            width: '100%',
        },

        label: {
            textAlign: 'center',
            position: 'absolute',
            width: '100%',
            color: 'rgba(0,0,0,.4)',
            fontSize: '12px',
            marginTop: '10px',
        },
        whiteLabel: {
            textAlign: 'center',
            position: 'absolute',
            width: '100%',
            fontSize: '12px',
            marginTop: '10px',
            color: 'rgba(255,255,255,.7)',
        },
        second: {
            marginTop: '50px',
        },

        github: {
            float: 'left',
            position: 'relative',
        },
        huealpha: {
            float: 'right',
            position: 'relative',
        },
        clear: {
            clear: 'both',
        },
        spacer: {
            height: '32px',
        },
        bottom: {
            marginTop: '40px',
        },
        twitter: {
            float: 'left',
            position: 'relative',
            marginTop: '16px',
        },
        circle: {
            float: 'right',
            position: 'relative',
        }
    }
});

export default style;
