import React from "react";
import PropTypes from 'prop-types';
import AdvanceThemeSettings from "./advance-theme-settings.tsx";
import ColorSettings from "./color-settings.tsx";
import FontSettings from "./font-settings.tsx";
import { FONT_SIZES, FONT_FAMILYS, FONT_WEIGHTS, LINE_HEIGHTS } from "../../utils/constants.ts";
import "./index.less";

const INIT_FONT_COLOR = '#666';
const INIT_BACKGROUND_COLOR = '#aaa';


function AdvanceSettings (props: any) {
  // isPro ? <>welcome to user advance setting</> : <>please upgrade to VIP version</>
  const changeStyle = props.changeStyle;
  return (
    
    <div className='advance-settings'>
      
      <AdvanceThemeSettings
        changeStyle={changeStyle}
      />
      
      <div className='setting-divide-line'></div>
      
      <FontSettings
        options={FONT_SIZES}
        title="字号"
        save={(option: any) => { changeStyle({ fontSize: option.value }); }}
      />
      
      <FontSettings
        options={FONT_FAMILYS}
        title="字体"
        save={(option: any) => { changeStyle({ fontFamily: option.value }); }}
      />
      
      <FontSettings
        options={FONT_WEIGHTS}
        title="粗细"
        save={(option: any) => { changeStyle({ fontWeight: option.value }); }}
      />
      
      <FontSettings
        options={LINE_HEIGHTS}
        title="行高"
        save={(option: any) => { changeStyle({ lineHeight: option.value }); }}
      />
      
      <div className='setting-divide-line'></div>
      
      <ColorSettings
        changeStyle={changeStyle}
        title='文字颜色'
        color={INIT_FONT_COLOR}
        settingKey="color"
      />
      
      <ColorSettings
        changeStyle={changeStyle}
        title='背景颜色'
        color={INIT_BACKGROUND_COLOR}
        settingKey="backgroundColor"
      />
    </div>
  );
}

AdvanceSettings.propTypes = {
  changeStyle: PropTypes.func.isRequired
};

export default AdvanceSettings;
