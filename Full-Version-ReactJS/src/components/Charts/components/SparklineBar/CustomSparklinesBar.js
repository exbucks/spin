import React from 'react';
import { SparklinesBars } from 'react-sparklines';

export default class CustomSparklinesBar extends SparklinesBars {
    render() {
        const { points, height, style, barWidth, barMargin } = this.props;
        const strokeWidth = 1 * ((style && style.strokeWidth) || 0);
        const width = barWidth || Math.ceil(points && points.length >= 2 ? Math.ceil(Math.max(0, points[1].x - points[0].x - strokeWidth)) : 0);

        const initialDiff = points[0].x;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={(i * width + i) }
                        y={Math.ceil(p.y)}
                        width={width}
                        height={Math.ceil(Math.max(0, height - p.y))}
                        style={style} />
                )}
            </g>
        );
    }
}
