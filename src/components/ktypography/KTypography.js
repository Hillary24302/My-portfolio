import React from 'react';
import { themes } from '../../constants/themes';
// import "./typography.less"

const Paragraphy = ({theme, children, className, ...rest}) => {
    const type = themes.includes(theme)? theme : themes[0];

    return(
        <p className={`k-typography text-${type} ${className?? ''}`} {...rest}>
            {children}
        </p>
    )
};

const KTypography = ({theme='primary', children, ...rest}) => {
    return (
        <Paragraphy theme={theme} {...rest}>{children}</Paragraphy>
    )
}

KTypography.Heading = ({theme = 'primary', size = 1, style, className, children, ...rest}) => {
    const type = themes.includes(theme)? theme : themes[0];

    const headingProps = {
        className: `k-typography text-${type} ${className?? ''}`,
        style,
        ...rest
    };

    const elemType = 'h' + (size < 1  || size > 6? 1 : size);

    return(
        React.createElement(elemType, headingProps, children)
    );
}

KTypography.Text = ({theme = 'primary', children, style, ...rest}) => {
    return(
        <Paragraphy theme={theme} {...rest} style={style}>{children}</Paragraphy>
    )
}
export default KTypography