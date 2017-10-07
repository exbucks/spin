import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import color from 'react-color/lib/helpers/color'

import { ColorWrap, EditableInput, Swatch } from 'react-color/lib/components/common'

export const Twitter = ({ onChange, onSwatchHover, hex, colors, width, triangle }) => {
  const styles = reactCSS({
    'default': {
      card: {
        width,
        background: '#1a1a1a',
        border: '1px solid #262626',
        //boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative',
      },
      body: {
        padding: '15px 9px 9px 15px',
      },
      label: {
        fontSize: '18px',
        color: '#fff',
      },
      triangle: {
        display: 'none',
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #1a1a1a transparent',
        position: 'absolute',
      },
      triangleShadow: {
        display: 'none',
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute',
      },
      hash: {
        background: '#1a1a1a',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#fff',
        borderStyle: 'solid',
        borderColor: '#404040',
        borderWidth: '1px 0 1px 1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '65px',
        fontSize: '14px',
        color: '#fff',
        border: '0px',
        outline: 'none',
        height: '26px',
        background: '#353535',
        //boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        border: '1px solid #404040',
        float: 'left',
        paddingLeft: '8px',
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0',
      },
      clear: {
        clear: 'both',
      },
    },
    'hide-triangle': {
      triangle: {
        display: 'none',
      },
      triangleShadow: {
        display: 'none',
      },
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px',
      },
      triangleShadow: {
        top: '-11px',
        left: '12px',
      },
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px',
      },
      triangleShadow: {
        top: '-11px',
        right: '12px',
      },
    },
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
  })

  const handleChange = (hexcode, e) => {
    color.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex',
    }, e)
  }

  return (
    <div style={ styles.card } className="twitter-picker">
      <div style={ styles.triangleShadow } />
      <div style={ styles.triangle } />

      <div style={ styles.body }>
        { map(colors, (c, i) => {
          return (
            <Swatch
              key={ i }
              color={ c }
              hex={ c }
              style={ styles.swatch }
              onClick={ handleChange }
              onHover={ onSwatchHover }
              focusStyle={{
                boxShadow: `0 0 4px ${ c }`,
              }}
            />
          )
        }) }
        <div style={ styles.hash }>#</div>
        <EditableInput
          style={{ input: styles.input }}
          value={ hex.replace('#', '') }
          onChange={ handleChange }
        />
        <div style={ styles.clear } />
      </div>
    </div>
  )
}

Twitter.defaultProps = {
  width: '276px',
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3',
           '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
}

export default ColorWrap(Twitter)
