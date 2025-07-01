declare module "react-svg-text" {
    import React from "react";

    const SvgText: React.FC<{
        width: number;
        height: number;
        text: string;
        path: string;
        style?: React.CSSProperties;
    }>;

    export default SvgText;
}
